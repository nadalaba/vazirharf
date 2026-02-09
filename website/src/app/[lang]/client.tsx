"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import DownloadIcon from "@mui/icons-material/Download";
import DocIcon from "@mui/icons-material/MenuBookOutlined";
import LabIcon from "@mui/icons-material/ScienceOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTranslations } from "next-intl";

import Link from "@/Link";
import { DOWNLOAD_URL, TAG_NAME } from "@/lib/constants";
import { languages, languagesList } from "@/i18n/settings";

import { HeroTitle } from "@/components/HeroTitle";
import { DonationView } from "@/components/DonationView";

export function DownloadButton({
  icon,
  buttonTitle,
  versionString,
}: {
  icon: React.ReactNode;
  buttonTitle: string;
  versionString: string;
}) {
  const theme = useTheme();
  return (
    <>
      <Button
        sx={{
          mt: 1,
          fontSize: "1.2rem",
          "&:hover": {
            backgroundColor: "#fff4e8",
          },
          ...theme.applyStyles("dark", {
            "&:hover": {
              backgroundColor: theme.vars?.palette.download.dark,
            },
          }),
          border: "1px solid black",
        }}
        variant="contained"
        color="download"
        href={DOWNLOAD_URL}
        endIcon={icon}
        size="large"
      >
        {buttonTitle}
      </Button>
      <Typography
        component="h6"
        // gutterBottom
        sx={{ fontWeight: "normal", mt: 1 }}
      >
        {versionString} {TAG_NAME}
      </Typography>
    </>
  );
}

type LinkButtonInfo = {
  title: string;
  href: string;
  noLinkStyle?: boolean;
  icon: React.ReactNode;
};

export function LinkButtons({ infoArray }: { infoArray: LinkButtonInfo[] }) {
  const theme = useTheme();
  return (
    <>
      {infoArray.map((info: LinkButtonInfo) => (
        <Link key={info.title} href={info.href} noLinkStyle={info.noLinkStyle}>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={info.icon}
            size="large"
            sx={{ color: theme.vars?.palette.text.primary }}
          >
            {info.title}
          </Button>
        </Link>
      ))}
    </>
  );
}

export function IndexLayout() {
  const t = useTranslations("index");
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Grid
        container
        sx={{ width: "100%" }}
        mt={1}
        mb={4}
        px={2}
        wrap="wrap"
        maxWidth="md"
        alignItems="center"
        rowGap={2}
      >
        <Grid size={{ lg: 6, md: 6, xs: 12 }}>
          <Box
            my={2}
            sx={{
              mb: 2,
              "@media (max-width: 480px)": { mb: 0 },
              textAlign: "center",
            }}
          >
            <HeroTitle />
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "200" }}
            >
              {t("hero_tail")}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ lg: 6, md: 6, xs: 12 }}>
          <Box sx={{ textAlign: "center" }}>
            <DownloadButton
              icon={<DownloadIcon fontSize="small" />}
              buttonTitle={t("downlod_full_package")}
              versionString={t("version")}
            />
          </Box>
        </Grid>
      </Grid>
      <Box maxWidth="md" px={2}>
        {t("font_description")}
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexWrap: "wrap",
          justifyContent: "center",
          my: 2,
        }}
      >
        <LinkButtons
          infoArray={[
            {
              title: t("docs"),
              href: "/docs",
              icon: <DocIcon fontSize="small" />,
            },
            {
              title: t("lab"),
              href: "/lab",
              icon: <LabIcon fontSize="small" />,
            },
            {
              title: t("github"),
              href: "https://github.com/nadalaba/vazirharf",
              noLinkStyle: true,
              icon: <GitHubIcon fontSize="small" />,
            },
          ]}
        />
      </Box>
      <Box
        maxWidth="md"
        sx={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        <Box
          sx={{
            mx: 2,
            width: "100%",
          }}
        >
          <DonationView />
        </Box>
      </Box>
      <Box
        maxWidth="md"
        sx={{
          width: "100%",
          p: 2,
          textAlign: "center",
          wordWrap: "break-word",
          fontSize: "0.8rem",
        }}
      >
        {t("other_free_fonts")}:&nbsp;
        <a
          href="https://rastikerdar.github.io/vazirmatn/"
          target="_blank"
          rel="noreferrer"
        >
          وزیرمتن
        </a>
        ،&nbsp;
        <a
          href="https://rastikerdar.github.io/sahel-font/"
          target="_blank"
          rel="noreferrer"
        >
          ساحل
        </a>
        ،&nbsp;
        <a
          href="https://rastikerdar.github.io/parastoo-font/"
          target="_blank"
          rel="noreferrer"
        >
          پرستو
        </a>
        ،&nbsp;
        <a
          href="https://rastikerdar.github.io/samim-font/"
          target="_blank"
          rel="noreferrer"
        >
          صمیم
        </a>
        ،&nbsp;
        <a
          href="https://rastikerdar.github.io/tanha-font/"
          target="_blank"
          rel="noreferrer"
        >
          تنها
        </a>
        ،&nbsp;
        <a
          href="https://rastikerdar.github.io/gandom-font/"
          target="_blank"
          rel="noreferrer"
        >
          گندم
        </a>
        ،&nbsp;
        <a
          href="https://rastikerdar.github.io/shabnam-font/"
          target="_blank"
          rel="noreferrer"
        >
          شبنم
        </a>
        ،&nbsp;
        <a
          href="https://rastikerdar.github.io/nahid-font/"
          target="_blank"
          rel="noreferrer"
        >
          ناهید
        </a>
        ،&nbsp;
        <a
          href="https://rastikerdar.github.io/vazir-code-font/"
          target="_blank"
          rel="noreferrer"
        >
          وزیرکد
        </a>
        <br />
        {t("from_other_designers")}:&nbsp;
        <a
          href="http://libre.font-store.ir/NikaFont/"
          target="_blank"
          rel="noreferrer"
        >
          نیکا
        </a>
        ،&nbsp;
        <a
          href="https://aminabedi68.github.io/Estedad/"
          target="_blank"
          rel="noreferrer"
        >
          استعداد
        </a>
        ،&nbsp;
        <a href="https://pfont.github.io/" target="_blank" rel="noreferrer">
          پی‌فونت
        </a>
      </Box>
      <Box
        dir="ltr"
        maxWidth="md"
        sx={{
          width: "100%",
          textAlign: "center",
          fontSize: "0.8rem",
        }}
      >
        {languagesList.map((lang: string) => (
          <Link key={lang} href="" lang={lang} noLinkStyle>
            {languages[lang].localCaption}{" "}
          </Link>
        ))}
      </Box>
    </Box>
  );
}
