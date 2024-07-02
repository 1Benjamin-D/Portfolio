import getContacts from "@/api/getContact";
import Image from "next/image";
import Link from "next/link";

export default async function Social() {
  const contacts = await getContacts();
  return (
    <div className='mb-[70px] mt-[70px]'>
      <ul className='flex text-center justify-center gap-10'>
        {contacts.map((contact: any,  index: number) => (
          <div key={contact.id} className="">
            <Link href={contact.url} className='' tabIndex={index + 6}>
              <Image src={contact.image} alt={contact.title} className='' width={100} height={100} style={{ width: "110px", height: "auto" }} />
            </Link>
          </div>
        ))}
      </ul>
    </div>
  )
}