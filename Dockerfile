FROM debian:13-slim AS build

WORKDIR /vazirharf

RUN apt-get update

RUN DEBIAN_FRONTEND=noninteractive apt-get install -y fontmake fonttools gftools wget sed zip

# download latest fontforge release from github because debian package has a bug
RUN wget https://github.com/fontforge/fontforge/releases/download/20251009/FontForge-2025-10-09-Linux-x86_64.AppImage
RUN chmod +x FontForge-2025-10-09-Linux-x86_64.AppImage

# a hack to install appimage because of FUSE issues on docker containers
RUN ./FontForge-2025-10-09-Linux-x86_64.AppImage --appimage-extract
RUN sed -i '8s/.*/this_dir="$(dirname "$(readlink -f "$0")")"/' squashfs-root/AppRun
RUN ln -s /vazirharf/squashfs-root/AppRun /usr/local/bin/fontforge

# download latin sources before copying Vazirharf sources to cache fixed steps
RUN wget https://github.com/googlefonts/roboto-3-classic/archive/refs/tags/v3.004.tar.gz
RUN tar -xzf v3.004.tar.gz
RUN mkdir latin && mv roboto-3-classic-3.004 latin/Roboto

COPY . .

# build fonts/ and misc/
RUN ./scripts/make-fonts.sh

# build Round-Dots/
RUN ./scripts/make-fonts.sh --rd-font

# package all into zip file
RUN ./scripts/make-package.sh

FROM scratch

COPY --from=build /vazirharf/fonts* /fonts
COPY --from=build /vazirharf/misc* /misc
COPY --from=build /vazirharf/Round-Dots* /Round-Dots
COPY --from=build /vazirharf/Vazirharf-*font-face.css /vazirharf/vazirharf-v*.zip /
