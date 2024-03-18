export enum MediaType {
    Image = "Image",
    YouTube = "YouTube",
    Vimeo = "Vimeo",
    GoogleDrive = "GoogleDrive"
}

export interface PortfolioItem {
    name: string;
    uniqueName: string;
    url?: string;
    urlButtonText?: string;
    intro: string;
    description: string;
    tech: string[];
    year: number;
    largeMedia: PortfolioMedia;
    smallMedia: PortfolioMedia;
    itemLogo?: PortfolioMedia;
    showNameNextToLogo?: boolean;
    companies: PortfolioItemCompany[];
}

interface PortfolioMedia {
    type?: MediaType;
    url: string,
    width: number,
    height: number
}

interface PortfolioItemCompany {
    name: string;
    mediaUrl: string;
    mediaWidth: number;
    mediaHeight: number;
}