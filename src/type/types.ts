export type TabDataType = {
  selectedBrowser: string | null;
  wallpapers: string[];
  appIcon: string | null;
  cropType: string;
  title: string;
  description: string;
};

export type SteperProps = {
  handleBack: () => void;
  handleNext: () => void;
  currentStep: number;
  isStepEnabled: (step: number) => boolean;
}

export type SteperOneProps = {
  browsers: any[];
  selectedBrowser: string | null;
  setSelectedBrowser: (browser: string) => void;
}

export type CropType = "original" | "rounded" | "circle";

export type SteperThreeProps = {
  selectedBrowser: string | null;
  wallpaper: File[];
  appIcon: string | null;
  setAppIcon: (icon: string | null) => void;
  cropType: CropType;
  setCropType: (type: CropType) => void;
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (desc: string) => void;
  handleSubmit: () => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SteperTwoProps = {
  wallpaper: File[];
  setWallpaper: (files: File[]) => void;
  handleNext: () => void;
}

export type ThemeCardProps = {
  image: string;
  title: string;
  className?: string;
};


export type ButtonPrimaryProps = {
  text?: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export type BrowserTab = {
  name: string;
  icon: string;
  route: string;
}


// type.ts
export type SlideType = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description?: string;
  titleColor?: string;
  subtitleColor?: string;
  descriptionColor?: string;
  buttonBorder?: string;
  buttonText?: string;
  bottomTitle?: string; // optional
}
