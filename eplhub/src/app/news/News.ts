export class News {
    title: string;
    link: string;
    medialink: string;
    summary: string;

    constructor(title: string, link: string, medialink: string, summary: string) {
        this.title = title;
        this.link = link;
        this.medialink = medialink;
        this.summary = summary;
    }
}
