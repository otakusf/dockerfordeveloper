FROM maven:3.9.9-eclipse-temurin-21

RUN useradd -ms /bin/bash vscode \
    && apt-get update \
    && apt-get install -y sudo \
    && echo "vscode ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor -o /usr/share/keyrings/yarn.gpg \
 && echo "deb [signed-by=/usr/share/keyrings/yarn.gpg] https://dl.yarnpkg.com/debian stable main" \
    > /etc/apt/sources.list.d/yarn.list
    
RUN apt-get update && apt-get install -y \
    curl \
    git \
    unzip

# instalar Quarkus CLI
RUN curl -Ls https://sh.quarkus.io/install.sh | bash

ENV PATH="$PATH:/root/.local/bin"

WORKDIR /workspace