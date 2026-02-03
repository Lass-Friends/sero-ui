# @sero/ui

A React component library built with Tailwind CSS v4.

## Installation

```bash
pnpm add @sero/ui
```

## Usage

Import components individually:

```tsx
import { Button } from "@sero/ui/button";
import { Avatar } from "@sero/ui/avatar";
import { Badge } from "@sero/ui/badge";
import { Alert } from "@sero/ui/alert";
import { ButtonToggle } from "@sero/ui/button-toggle";
```

Import the styles in your app:

```tsx
import "@sero/ui/styles";
```

## Components

- **Button** - Primary, secondary, outline, ghost, and destructive variants
- **ButtonToggle** - Toggle button with attend/pending/attending states
- **Avatar** - User avatars with fallback initials and status badges
- **AvatarGroup** - Stacked avatar groups
- **Badge** - Status badges with icons
- **Alert** - Alert messages with icons and actions

## Development

```bash
# Install dependencies
pnpm install

# Run Storybook
pnpm storybook

# Build the library
pnpm build
```

## Tech Stack

- React 18/19
- Tailwind CSS v4
- Heroicons
- Class Variance Authority
- Storybook 10
