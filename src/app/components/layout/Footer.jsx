import Image from "next/image";
const   Footer =() => {
    return (
        <footer className="flex flex-col md:flex-row justify-between gap-10 md:gap-0 py-20 px-6 mt-20">
            <div className="w-full md-[30%]">
                <Image className="w-32" src="/logo.png" alt="" width={237} height={64} />
                <ul className="space-y-4 text-[#000] max-sm:text-sm mt-6">
                    <li>
                        <a href="/" className="flex gap-2 items-center">
                        <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.262 20.134C7.262 20.134 0 14.018 0 8C0 5.87827 0.84285 3.84344 2.34315 2.34315C3.84344 0.84285 5.87827 0 8 0C10.1217 0 12.1566 0.84285 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 14.018 8.738 20.134 8.738 20.134C8.334 20.506 7.669 20.502 7.262 20.134ZM8 11.5C8.4596 11.5 8.9148 11.4095 9.3394 11.2336C9.764 11.0577 10.1499 10.7999 10.4749 10.4749C10.7999 10.1499 11.0577 9.764 11.2336 9.3394C11.4095 8.9148 11.5 8.4596 11.5 8C11.5 7.54037 11.4095 7.08525 11.2336 6.66061C11.0577 6.23597 10.7999 5.85013 10.4749 5.52513C10.1499 5.20012 9.764 4.94231 9.3394 4.76642C8.9148 4.59053 8.4596 4.5 8 4.5C7.0717 4.5 6.1815 4.86875 5.52513 5.52513C4.86875 6.1815 4.5 7.07174 4.5 8C4.5 8.9283 4.86875 9.8185 5.52513 10.4749C6.1815 11.1313 7.0717 11.5 8 11.5Z" fill="#327AFA"/>
                        </svg>
                        123 Example Road New York, NY 12345
                        </a>
                    </li>
                    <li>
                        <a href="/" className="flex gap-2 items-center">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17.6 4.25L10.53 8.67C10.21 8.87 9.79 8.87 9.47 8.67L2.4 4.25C2.29973 4.19371 2.21192 4.11766 2.14189 4.02645C2.07186 3.93525 2.02106 3.83078 1.99258 3.71937C1.96409 3.60796 1.9585 3.49194 1.97616 3.37831C1.99381 3.26468 2.03434 3.15581 2.09528 3.0583C2.15623 2.96079 2.23632 2.87666 2.33073 2.811C2.42513 2.74533 2.53187 2.69951 2.6445 2.6763C2.75712 2.65309 2.87328 2.65297 2.98595 2.67595C3.09863 2.69893 3.20546 2.74453 3.3 2.81L10 7L16.7 2.81C16.7945 2.74453 16.9014 2.69893 17.014 2.67595C17.1267 2.65297 17.2429 2.65309 17.3555 2.6763C17.4681 2.69951 17.5749 2.74533 17.6693 2.811C17.7637 2.87666 17.8438 2.96079 17.9047 3.0583C17.9657 3.15581 18.0062 3.26468 18.0238 3.37831C18.0415 3.49194 18.0359 3.60796 18.0074 3.71937C17.9789 3.83078 17.9281 3.93525 17.8581 4.02645C17.7881 4.11766 17.7003 4.19371 17.6 4.25Z" fill="#327AFA"/>
                        </svg>
                        email@example.com
                        </a>
                    </li>
                    <li>
                        <a href="/" className="flex gap-2 items-center">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.23 12.2598L13.69 11.9698C13.3914 11.9347 13.0886 11.9678 12.8046 12.0665C12.5206 12.1652 12.2626 12.327 12.05 12.5398L10.21 14.3798C7.3714 12.9357 5.0641 10.6284 3.62004 7.7898L5.47004 5.93977C5.90004 5.50977 6.11004 4.90977 6.04004 4.29977L5.75004 1.77977C5.69356 1.29186 5.45951 0.841789 5.0925 0.515359C4.7255 0.188929 4.25121 0.00896828 3.76004 0.00976828H2.03004C0.900041 0.00976828 -0.0399593 0.949768 0.0300407 2.07977C0.560041 10.6198 7.39 17.4398 15.92 17.9698C17.05 18.0398 17.99 17.0998 17.99 15.9698V14.2398C18 13.2298 17.24 12.3798 16.23 12.2598Z" fill="#327AFA"/>
                        </svg>
                        (555) 555-5555
                        </a>
                    </li>
                </ul>
                <p className="text-[#909090] gilroy-m mt-14">Copyright © 2025</p>
            </div>
            <div className="w-full md-[25%]">
                <h3 className="inter-m font-medium text-[#000] text-xl tracking-[-0.8px]">Useful Links</h3>
                <div className="flex flex-col gap-4 text-[#464646] mt-6 gilroy-m">
                    <a href="/">AI Financial Analysis</a>
                    <a href="/">Real-time Dashboards</a>
                    <a href="/">Management Reporting</a>
                    <a href="/">Smart Alerts & Notifications</a>
                </div>
            </div>
            <div className="w-full md-[38%]">
                <h3 className="inter-m font-medium text-[#000] text-xl tracking-[-0.8px]">Subscribe our newsletter</h3>
                <div className="relative mt-6">
                    <input type="text" placeholder="First Name" className="p-5 rounded-full border border-[#E0E7F5] w-full gilroy-m text-[#909090]" />
                    <button className="absolute top-2 right-2 gradient-1 py-3 px-8 text-[#fff] rounded-full gilroy-m">Subscribe</button>
                </div>
                <div className="flex items-center justify-between mt-8">
                    <h3 className="inter-m font-medium text-[#000] text-xl tracking-[-0.8px]">Follow Us</h3>
                    <div className="flex gap-1 items-center">
                        <a href="">
                            <Image src="/fb.svg" alt="insta" width={45} height={45} />
                        </a>
                        <a href="">
                            <Image src="/x.svg" alt="insta" width={45} height={45} />
                        </a>
                        <a href="">
                            <Image src="/insta.svg" alt="insta" width={45} height={45} />
                        </a>
                    </div>
                </div>
                <div className="flex justify-end text-[#909090] gilroy-m mt-8">
                        <p>Lisencing</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;