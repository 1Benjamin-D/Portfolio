import getContacts from "@/api/getContact";
import Link from "next/link";
import Image from "next/image";

export default async function Social() {
    const contacts = await getContacts();
    return (
        <div className='mb-[70px] mt-[70px]'>
        <ul className='flex text-center justify-center gap-10'>
          {contacts.map((contact: any) => (
            <div key={contact.id} className="">
              <Link href={contact.url} className=''>
                <Image src={contact.image} alt={contact.title} className='' width={1000} height={1000} style={{ width: "110px", height: "auto" }} />
              </Link>
            </div>
          ))}
        </ul>
      </div>
    )
}