import type { Meta, StoryObj } from "@storybook/react-vite";
import { GlobeAltIcon } from "@heroicons/react/20/solid";
import { Banner, BannerTextButton } from "./banner";
import { ButtonToggle } from "./button-toggle";
import { AvatarGroup } from "./avatar-group";

const meta: Meta<typeof Banner> = {
  title: "UI/Banner",
  component: Banner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["flagship-mobile", "flagship-desktop", "profile-mobile", "profile-desktop", "manage-mobile", "manage-desktop"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Social icon components (muted, smaller sizes per Figma)
const TelegramIcon = () => (
  <svg className="size-4 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
  </svg>
);

const XIcon = () => (
  <svg className="size-4 text-muted-foreground" viewBox="-3 -3 22 22" fill="currentColor">
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
  </svg>
);

const bannerImage = "/images/event-ethcc-cannes.png";
const bannerDominantColor = "rgba(7, 197, 213, 1)";
const profileImage = "https://www.figma.com/api/mcp/asset/6c5db87a-05e5-4857-8961-ba8f1a2aa947";
const profileDominantColor = "#7A8B8B";
const manageImage = "/images/event-the-local.png";
const manageDominantColor = "#ff5b30";

export const FlagshipMobile: Story = {
  render: () => (
    <div className="w-[393px]">
      <Banner
        variant="flagship-mobile"
        title="EthCC[9]"
        subtitle="Jun 30 – Jul 3  •  Cannes, France"
        description="The Ethereum Community Conference (EthCC) is the largest annual European event focusing on technology and community. Four intense days of conferences, networking, and learning."
        avatarSrc={bannerImage}
        dominantColor={bannerDominantColor}
        onBack={() => {}}
        onMore={() => {}}
        actions={<BannerTextButton transparent>Manage</BannerTextButton>}
        socialLinks={
          <>
            <GlobeAltIcon className="size-4 text-muted-foreground" />
            <TelegramIcon />
            <XIcon />
          </>
        }
      >
        <div className="flex items-center gap-4">
          <ButtonToggle />
          <AvatarGroup
            avatars={[
              { src: "https://i.pravatar.cc/100?img=1" },
              { src: "https://i.pravatar.cc/100?img=2" },
              { src: "https://i.pravatar.cc/100?img=3" },
              { src: "https://i.pravatar.cc/100?img=4" },
              { src: "https://i.pravatar.cc/100?img=5" },
            ]}
            count={1056}
            attending={25}
          />
        </div>
      </Banner>
    </div>
  ),
};

export const FlagshipDesktop: Story = {
  render: () => (
    <div className="w-[976px]">
      <Banner
        variant="flagship-desktop"
        title="EthCC[9]"
        subtitle="Jun 30 – Jul 3  •  Cannes, France"
        description="The Ethereum Community Conference (EthCC) is the largest annual European event focusing on technology and community. Four intense days of conferences, networking, and learning."
        imageSrc={bannerImage}
        dominantColor={bannerDominantColor}
        actions={<BannerTextButton>Manage</BannerTextButton>}
        onMore={() => {}}
        socialLinks={
          <>
            <GlobeAltIcon className="size-4 text-muted-foreground" />
            <TelegramIcon />
            <XIcon />
          </>
        }
      >
        <div className="flex items-center gap-4">
          <ButtonToggle />
          <AvatarGroup
            avatars={[
              { src: "https://i.pravatar.cc/100?img=1" },
              { src: "https://i.pravatar.cc/100?img=2" },
              { src: "https://i.pravatar.cc/100?img=3" },
              { src: "https://i.pravatar.cc/100?img=4" },
              { src: "https://i.pravatar.cc/100?img=5" },
            ]}
            count={1056}
            attending={25}
          />
        </div>
      </Banner>
    </div>
  ),
};

export const ProfileMobile: Story = {
  render: () => (
    <div className="w-[393px]">
      <Banner
        variant="profile-mobile"
        title="Amanda Cassatt"
        avatarSrc={profileImage}
        dominantColor={profileDominantColor}
        showStatus
        onBack={() => {}}
        onMore={() => {}}
      />
    </div>
  ),
};

export const ProfileDesktop: Story = {
  render: () => (
    <div className="w-[644px]">
      <Banner
        variant="profile-desktop"
        title="Amanda Cassatt"
        avatarSrc={profileImage}
        dominantColor={profileDominantColor}
        showStatus
        onBack={() => {}}
        onMore={() => {}}
      />
    </div>
  ),
};

export const ManageMobile: Story = {
  render: () => (
    <div className="w-[393px]">
      <Banner
        variant="manage-mobile"
        title="THE LOCAL: A Rooftop Brunch for Founders, Funders & Friends"
        subtitle="Jun 30, 10:00 AM  •  Cannes, France"
        avatarSrc={manageImage}
        dominantColor={manageDominantColor}
        onBack={() => {}}
        onEdit={() => {}}
        onMore={() => {}}
      />
    </div>
  ),
};

export const ManageDesktop: Story = {
  render: () => (
    <div className="w-[976px]">
      <Banner
        variant="manage-desktop"
        title="THE LOCAL: A Rooftop Brunch for Founders, Funders & Friends"
        subtitle="Jun 30, 10:00 AM  •  Cannes, France"
        avatarSrc={manageImage}
        dominantColor={manageDominantColor}
        onBack={() => {}}
        onEdit={() => {}}
        onMore={() => {}}
      />
    </div>
  ),
};

// Backwards compatibility
export const Default: Story = {
  render: () => (
    <div className="w-[393px]">
      <Banner
        title="EthCC[9]"
        subtitle="Jun 30 – Jul 3  •  Cannes, France"
        description="The Ethereum Community Conference (EthCC) is the largest annual European event focusing on technology and community. Four intense days of conferences, networking, and learning."
        avatarSrc={bannerImage}
        dominantColor={bannerDominantColor}
        onBack={() => {}}
        onMore={() => {}}
        actions={<BannerTextButton>Manage</BannerTextButton>}
        socialLinks={
          <>
            <GlobeAltIcon className="size-4 text-muted-foreground" />
            <TelegramIcon />
            <XIcon />
          </>
        }
      >
        <div className="flex items-center gap-4">
          <ButtonToggle />
          <AvatarGroup
            avatars={[
              { src: "https://i.pravatar.cc/100?img=1" },
              { src: "https://i.pravatar.cc/100?img=2" },
              { src: "https://i.pravatar.cc/100?img=3" },
              { src: "https://i.pravatar.cc/100?img=4" },
              { src: "https://i.pravatar.cc/100?img=5" },
            ]}
            count={1056}
            attending={25}
          />
        </div>
      </Banner>
    </div>
  ),
};
