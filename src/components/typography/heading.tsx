import { cn } from "@/lib/utils";

const Heading1 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <h1 className={cn(`text-primary-500 font-bold text-[60px] leading-[1.4]`, className)}>
        {children}
        </h1>
    );
}
const Heading2 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <h2 className={cn(`text-accent-900 font-bold text-[56px] leading-[1.4] tracking-tight text-center align-middle`, className)}>
        {children}
        </h2>
    );
}

const Heading4 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <h4 className={cn(`text-primary-500 font-bold text-[42px] leading-[1.4]`, className)}>
        {children}
        </h4>
    );
}

const SectionName = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <h6 className={cn(`text-primary-500 font-bold text-lg` , className)}>
        {children}
        </h6>
    );
}

const Heading = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <h2 className={cn(`text-accent-900 font-bold text-[42px] leading-[1.4]`, className)}>
        {children}
        </h2>
    );
}

const SubHeading = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <h6 className={cn(`text-accent-900 font-bold text-[32px] leading-[1.4]`, className)}>
        {children}
        </h6>
    );
}


const Paragraph = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <p className={cn(`text-accent-400 text-base leading-[1.5]`,className)}>
        {children}
        </p>
    );
}
export { Heading1,Heading2,Heading4, Heading,SectionName , SubHeading, Paragraph };