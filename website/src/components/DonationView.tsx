"use client"; //todo split this into server and client

import { useState } from "react";
import Box from "@mui/material/Box";
import { useTranslations } from "next-intl";

import { formatNumber } from "@/lib/utils";
import { useWindowSize } from "@/lib/windowSize";
import { Donation } from "@/types";

import { DonationList } from "./DonationList";
import { SelectButton } from "./SelectButton";
import CryptoPayment from "./CryptoPayment";

export function DonationView({ donations }: { donations: Donation[] }) {
  const t = useTranslations("donation");
  const [sortBy, setSortBy] = useState<"amount" | "date">("amount");
  useWindowSize();
  const totalAmount = donations.reduce((pv, cv) => pv + cv.amount, 0);
  const formattedTotalAmount = formatNumber(totalAmount, "٬");
  const sortedDonations =
    sortBy === "amount"
      ? donations.sort((a, b) => (a.amount < b.amount ? 1 : -1))
      : donations.sort((a, b) => (a.date > b.date ? 1 : -1));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        fontSize: "0.8rem",
        width: "100%",
      }}
    >
      <CryptoPayment />
      <Box
        sx={{
          display: "flex",
          columnGap: 3,
          rowGap: 1,
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {t("donations_from")}:{" "}
          <span style={{ direction: "ltr", margin: "0 5px" }}>
            {`${formattedTotalAmount} USD`}
          </span>
        </Box>
        <Box
          sx={{
            display: donations.length > 0 ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          {t("order_by")}:
          <SelectButton
            color="inherit"
            variant="text"
            onClick={() => setSortBy("date")}
            selected={sortBy === "date"}
            size="small"
            sx={{ fontSize: "0.8rem", minWidth: "unset" }}
          >
            {t("date")}
          </SelectButton>
          <SelectButton
            color="inherit"
            variant="text"
            onClick={() => setSortBy("amount")}
            selected={sortBy === "amount"}
            size="small"
            sx={{ fontSize: "0.8rem", minWidth: "unset" }}
          >
            {t("amount")}
          </SelectButton>
        </Box>
      </Box>
      {donations.length === 0 && t("fetching_donations")}
      {donations.length > 0 && <DonationList donations={sortedDonations} />}
      <Box mt={1} sx={{ display: donations.length > 0 ? "block" : "none" }}>
        <a
          href="https://github.com/nadalaba/vazirharf/blob/gh-pages/donations.json"
          target="_blank"
          rel="noreferrer"
        >
          {t("list_source")}
        </a>
      </Box>
    </Box>
  );
}
