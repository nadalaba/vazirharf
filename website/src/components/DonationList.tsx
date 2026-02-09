"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { List, type RowComponentProps } from "react-window";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import {useLocale} from 'next-intl';

import { languages } from "@/i18n/settings";

import { convertNumberToPersian, formatNumber } from "@/lib/utils";
import { useWindowSize } from "@/lib/windowSize";
import { Donation } from "@/types";

type Props = {
  donations: Donation[];
};

export const DonationList = (props: Props) => {
  const theme = useTheme();
  const locale = useLocale();
  useWindowSize(); // rerender on resize
  const { donations } = props;

  const listRef = useRef<HTMLDivElement | null>(null);
  const [viewWidth, setViewWidth] = useState(0);

  useEffect(() => {
    if (listRef.current) {
      setViewWidth(listRef.current.scrollWidth);
    }
  }, []);
  const itemWidth = 65;
  const itemHeight = 140;
  const itemsPerRow = Math.floor(viewWidth / itemWidth);
  const rowCount = Math.ceil(donations.length / itemsPerRow);
  const listHeight = 300;

  return (
    <Box
      ref={listRef}
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
                {items.map((d) => (
                  <div
                    key={d.name + d.date}
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
                          overflow: "hidden",
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
    </Box>
  );
};
