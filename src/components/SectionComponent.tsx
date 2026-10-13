import { type ReactNode } from 'react';

interface Props {
    children: ReactNode;
    title: string;
    showTitleLine?: boolean;
    lineColor?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'accent' | 'accent-dark' | 'dark' | 'light';
    sectionClass?: string;
    containerClass?: string;
    titleClass?: string;
    description?: string;
    descriptionClass?: string;

}

const contDefaultClass = 'py-8 max-w-7xl mx-auto px-6 sm:px-8 ';
const titleDefaultClass = 'text-3xl md:text-4xl lg:text-5xl font-bold';
const descriptionDefaultClass = 'text-sm md:text-lg text-light mt-4 w-full text-center';

const SectionComponent = ({ children, lineColor = 'primary', title, sectionClass, containerClass = contDefaultClass, showTitleLine = true, titleClass = titleDefaultClass, descriptionClass = descriptionDefaultClass, description }: Props) => {

    return (
        <section className={`${sectionClass} `}>
            <div className={`${containerClass}`}>

                <div className='w-full  mx-auto flex items-center gap-3'>

                    {
                        showTitleLine && (
                            <span className={`w-5 h-1 bg-${lineColor} block`} />
                        )
                    }
                    <h2 className={`${titleClass}`}>{title}</h2>
                </div>
                {
                    description && (
                        <p className={`${descriptionClass}`}>{description}</p>
                    )
                }

                {children}

            </div>
        </section>
    )

}

export default SectionComponent;