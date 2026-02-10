FROM debian:12-slim AS build

WORKDIR /vazirharf

RUN apt-get update

RUN DEBIAN_FRONTEND=noninteractive apt-get install -y fontmake fonttools gftools zip sed git make

RUN apt-get install -y fontforge python3-fontforge

COPY . .

RUN make all

FROM scratch

COPY --from=build /vazirharf/fonts* /fonts
COPY --from=build /vazirharf/misc* /misc
COPY --from=build /vazirharf/Round-Dots* /Round-Dots
COPY --from=build /vazirharf/Vazirharf-*font-face.css /vazirharf/vazirharf-v*.zip /
