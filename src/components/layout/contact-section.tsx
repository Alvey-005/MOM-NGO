import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiMapPin } from "react-icons/hi2";




export default function ContactSection() {
  return (
    <div className=" py-12 px-4 md:px-[120] bg-[#FCFBF7]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-[42px] font-bold tracking-tight leading-[1.4] text-accent-900">Contact Info</h1>
            <p className="text-accent-500">We are here to support you on your journey<br/> with baby childcare.</p>
          </div>

          <div className="space-y-10">
            <div className="flex items-start gap-4">
              <FaPhone  className="size-[14] text-primary-600 mt-1" />
              <div>
                <h3 className="font-semibold text-accent-900">Phone</h3>
                <p className="text-accent-500">+44 545 989 626</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MdEmail className="size-[14] text-primary-600 mt-1" />
              <div>
              <h3 className="font-semibold text-accent-900">Email</h3>
              <p className="text-accent-500">youremail@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <HiMapPin className="size-[14] text-primary-600 mt-1" />
              <div>
              <h3 className="font-semibold text-accent-900">Location</h3>
              <p className="text-accent-500">
                28 Green Tower, Street
                <br />
                Name New York City, USA.
              </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <form className="space-y-4">
            <div>
              <Input type="text" placeholder="Your Name" className="w-full border-gray-200 focus:border-emerald-600" />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                className="w-full border-gray-200 focus:border-emerald-600"
              />
            </div>
            <div>
              <Input type="text" placeholder="Subject" className="w-full border-gray-200 focus:border-emerald-600" />
            </div>
            <div>
              <Textarea
                placeholder="Messages"
                className="min-h-[120px] w-full border-gray-200 focus:border-emerald-600"
              />
            </div>
            <div>
              <Button type="submit" size="lg">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
