# IEEE Club Website

This repository contains the code for the IEEE student branch club website at UC `https://ieee.uc.edu/`.

## Table of Contents

- [Introduction](#introduction)
- [Setup](#setup)
- [Usage](#usage)
- [Configuration](#configuration)

## Introduction

This website is designed to showcase the activities and events of the IEEE student branch at UC. It provides essential information about the club, including membership details, upcoming events, and past achievements.

## Setup

To set up the website locally:

1. Ensure Docker is installed on your system.
2. Clone this repository to your local machine.
3. Navigate to the project directory in your terminal.
4. Run `docker-compose up` to start the development environment.

## Usage

Once the setup is complete:

1. Access the website by opening a web browser and navigating to `http://localhost:8000`.
2. You can view the live site and make modifications as needed.

## Configuration

The website uses a JSON configuration file (`info.json`) to manage site-specific information. To update the site content:

1. Locate the `info.json` file in the project root directory.
2. Edit the file to modify the desired information.
3. Restart the Docker container for changes to take effect.
