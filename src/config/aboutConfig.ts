// aboutTabs.config.ts

export interface AboutTabItem
{
    id: string;
    title: string;
    description: string;
    image: string;
}

export const aboutTabs: AboutTabItem[] = [
    {
        id: 'about',
        title: 'About Us',
        description:
            'We are a passionate team dedicated to delivering innovative solutions that drive meaningful impact. Our story began with a vision to bridge technology and real-world problems.',
        image: '/images/about-us.jpg',
    },
    {
        id: 'vision',
        title: 'Our Vision',
        description:
            'To revolutionize industries by harnessing the power of modern technology, fostering a culture of innovation, and empowering businesses worldwide.',
        image: '/images/our-vision.jpg',
    },
    {
        id: 'mission',
        title: 'Our Mission',
        description:
            'Our mission is to build accessible, high-quality solutions that solve real problems, enhance experiences, and inspire the next generation of creators.',
        image: '/images/our-mission.jpg',
    },
];
