import { Image as ImageType } from '@/type/image'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    image: ImageType;
    name: string;
    role: string;
    city: string;
    resumeUrl: string
}

const BasicDetail = ({ image, name, role, city, resumeUrl }: Props) => {
    return (
        <div className='flex flex-col items-center gap-4 md:gap-8'>
            <Image
                src={image?.image}
                alt={image?.alt}
                width={340}
                height={350}
                className='object-cover'
            />

            <div className='flex flex-col gap-2 md:gap-4'>
                <div className='flex flex-col gap-3'>
                    <h2 className='heading-3 md:heading-2 linear-gradient bg-clip-text text-transparent text-center'>
                        {name}
                    </h2>

                    <h6 className="w-full heading-6 text-primary text-center">
                        <span className="leading-loose italic">{role}</span>{"  "}<span className="font-normal leading-loose"> based in </span><span className="leading-loose italic">{city}</span>
                    </h6>
                </div>

                <Link download href={resumeUrl || ""} target='_blank' passHref className="underline text-2 text-primary flex gap-2 justify-center">
                    <span>Download CV</span>

                    <span className='bg-primary text-white flex justify-center items-center w-6 h-6 rounded-[16px]'>
                        <ArrowUpRight size={14} weight='bold' />
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default BasicDetail