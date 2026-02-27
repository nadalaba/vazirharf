"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { List, type RowComponentProps } from "react-window";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import {useLocale} from 'next-intl';

import { languages } from "@/i18n/settings";

import { convertNumberToPersian, formatNumber } from "@/lib/utils";
import { Donation } from "@/types";

type Props = {
  donations: Donation[];
};

export const DonationList = (props: Props) => {
  const theme = useTheme();
  const locale = useLocale();
  const { donations } = props;
  
  const [viewWidth, setViewWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize
      setViewWidth(entries[0].contentBoxSize[0].inlineSize);
    });
    if (containerRef?.current) resizeObserver.observe(containerRef.current);
  }, [containerRef]);

  const itemWidth = 90;
  const itemHeight = 100;
  const itemsPerRow = Math.floor(viewWidth / itemWidth) || 1;
  const rowCount = Math.ceil(donations.length / itemsPerRow);
  const listHeight = Math.min(rowCount, 2) * itemHeight + 10;

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 0,
        mt: 1,
        height: `${listHeight}px`,
        border: 1,
        borderColor: theme.vars?.palette.divider,
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      {viewWidth > 0 && (
        <List
          rowCount={rowCount}
          rowHeight={itemHeight}
          dir={languages[locale].direction}
          rowProps={{}}
          overscanCount={4}
          rowComponent={({ index, style }: RowComponentProps) => {
            const items = donations.slice(
              index * itemsPerRow,
              index * itemsPerRow + itemsPerRow
            );
            return (
              <Box style={style}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  {items.map((d, i) => (
                    <div
                      key={i}
                      style={{
                        width: `${itemWidth}px`,
                        fontSize: "0.7rem",
                        lineHeight: 1.3,
                        float: "right",
                        overflow: "hidden",
                        paddingTop: 8,
                      }}
                    >
                      <a
                        href={d.web ? d.web : undefined}
                        title={`${d.date}\n${d.name}`}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "start",
                          alignItems: "center",
                          paddingTop: 8,
                          height: `${itemHeight}px`,
                          color: !d.web ? theme.vars?.palette.text.primary : undefined,
                        }}
                        target="__blank"
                        rel="noreferrer"
                      >
                        <Image
                          src={
                            d.img ??
                            `https://s.gravatar.com/avatar/${d.date.replace(
                              /(\s)|(:)|(\/)/g,
                              ""
                            )}?noemail&s=50&d=wavatar`
                          }
                          alt={d.name}
                          width={50}
                          height={50}
                          style={{ borderRadius: "50%" }}
                        />
                        <div
                          style={{
                            paddingTop: "4px",
                            overflow: "hidden"
                          }}
                        >
                          {d.name}
                        </div>
                        <div
                          style={{
                            fontSize: "0.6rem",
                            color: theme.vars?.palette.text.primary,
                            opacity: 0.5,
                          }}
                        >
                          {locale === "fa"
                            ? convertNumberToPersian(formatNumber(d.amount, "٬"))
                            : formatNumber(d.amount, ",")}
                        </div>
                      </a>
                    </div>
                  ))}
                </Box>
              </Box>
            );
          }}
        />
      )}
    </Box>
  );
};
