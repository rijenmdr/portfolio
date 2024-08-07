import Image from "next/image";

type Props = {
    quote: string;
    quoteBy: string;
}

const Quote = ({ quote, quoteBy }: Props) => {
    return (
        <div className="bg-primary text-white p-10 flex flex-col gap-3 items-end">
            <div className="flex gap-3 items-center">
                <Image
                    src={"/icon/quote.svg"}
                    alt="quote"
                    width={64}
                    height={64}
                    className="object-cover"
                />
                <p className="text-base md:text-[20px] italic font-semibold leading-[32px]">
                    “{quote}”
                </p>
            </div>

            <p className="text-base md:text-[18px] font-bold text-end">-{quoteBy}</p>
        </div>
    )
}

export default Quote