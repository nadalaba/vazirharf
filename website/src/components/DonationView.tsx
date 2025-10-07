import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

import { SelectButton } from "./SelectButton";
import {
  convertNumberToPersian,
  formatNumber,
  useWindowSize,
} from "../lib/utils";
import { Donation } from "../types";
import { DonationList } from "./DonationList";
import { BASE_PATH } from "../lib/constants";

const BTC_ADDRESS = "bc1qesms3zcc4um0m3mv94jrmtjnfd98jucm29d7yh";
const ETH_ADDRESS = "0xCEee44eF4BD8A2B7af0917EC517449f32E448a65";

export const DonationView = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "donation" });
  const [donations, setDonations] = useState<Donation[]>([]);
  const [sortBy, setSortBy] = useState<"amount" | "date">("amount");
  const [paymentShow, setPaymentShow] = useState<"off" | "btc" | "eth">("off");
  const _ = useWindowSize();
  const totalAmount = donations.reduce((pv, cv) => pv + cv.amount, 0);
  const formattedTotalAmount = formatNumber(totalAmount, "٬");
  const sortedDonations =
    sortBy === "amount"
      ? donations.sort((a, b) => (a.amount < b.amount ? 1 : -1))
      : donations.sort((a, b) => (a.date > b.date ? 1 : -1));

  useEffect(() => {
    const fetchDonations = async () => {
      const response = await fetch(`${BASE_PATH}/donations.json`);
      setDonations(await response.json());
    };
    fetchDonations();
  }, []);

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
      <p>{t("payment_title")}</p>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexWrap: "wrap",
          justifyContent: "center",
          my: 2,
          marginTop: 0,
        }}
      >
        <Button
          color="primary"
          variant="outlined"
          onClick={() => {
            paymentShow === "btc"
              ? setPaymentShow("off")
              : setPaymentShow("btc");
          }}
          sx={{ borderRadius: "25px" }}
        >
          Bitcoin BTC
        </Button>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => {
            paymentShow === "eth"
              ? setPaymentShow("off")
              : setPaymentShow("eth");
          }}
          sx={{ borderRadius: "25px" }}
        >
          Ethereum ETH
        </Button>
      </Box>
      <Box
        id="btc-address"
        sx={{ display: paymentShow === "btc" ? "block" : "none", mb: 3 }}
      >
        <div>
          <b>Bitcoin</b>
        </div>
        <div>
          <a href={`bitcoin:${BTC_ADDRESS}`}>
            <img src="data:image/png;base64,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" />
          </a>
        </div>
        <Box
          sx={(theme: any) => ({
            display: "inline-block",
            border: 1,
            borderColor: theme.palette.devider,
            p: 0.5,
          })}
          onClick={() => {
            navigator.clipboard.writeText(BTC_ADDRESS);
            alert("Copied");
          }}
        >
          {BTC_ADDRESS}
        </Box>
      </Box>
      <Box
        id="eth-address"
        sx={{ display: paymentShow === "eth" ? "block" : "none", mb: 3 }}
      >
        <div>
          <b>Ethereum</b>
        </div>
        <div>
          <a href={`ethereum:${ETH_ADDRESS}`}>
            <img src="data:image/png;base64,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" />
          </a>
        </div>
        <Box
          sx={(theme: any) => ({
            display: "inline-block",
            border: 1,
            borderColor: theme.palette.devider,
            p: 0.5,
          })}
          onClick={() => {
            navigator.clipboard.writeText(ETH_ADDRESS);
            alert("Copied");
          }}
        >
          {ETH_ADDRESS}
        </Box>
      </Box>
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
          href="https://github.com/NadAlaba/vazirharf/blob/gh-pages/donations.json"
          target="_blank"
          rel="noreferrer"
        >
          {t("list_source")}
        </a>
      </Box>
    </Box>
  );
};
