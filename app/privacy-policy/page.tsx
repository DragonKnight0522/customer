import React from 'react';
import Link from "next/link";

const page = () => {
  return (
    <div className="row pt-28 pb-20">
      <h2 className="text-3xl font-bold uppercase">PRIVACY POLICY FOR GHOSTCARTS.COM</h2>
      <h2 className="text-3xl font-semibold mb-4 uppercase">WHO WE ARE:</h2>
      <p className="font-semibold mb-4">Ghostcarts Store is an online e-commerce platform that provides a variety of products to its customers. Our website URL is www.ghostcarts.com, and our contact email is info@ghostcarts.com.</p>
      <h2 className="text-3xl font-semibold mb-4 uppercase">WHAT PERSONAL DATA WE COLLECT AND WHY WE COLLECT IT:</h2>
      <p className="font-semibold mb-4">We collect personal data such as name, email address, personal account preferences, and transactional data, such as purchase information. We also collect technical data, such as information about cookies. We use this data to provide our customers with the best possible experience and for internal business operations. We may also collect and retain sensitive personal data, such as data concerning health, in order to provide a better service to our customers.</p>
      <h2 className="text-3xl font-semibold mb-4 uppercase">COMMENTS:</h2>
      <p className="font-semibold mb-4">When visitors leave comments on our website, we collect the data shown in the comments form, as well as the visitor’s IP address and browser user agent string to help spam detection.</p>
      <h2 className="text-3xl font-semibold mb-4 uppercase">MEDIA:</h2>
      <p className="font-semibold mb-4">Visitors to our website can upload media files, such as images. All uploaded files are usually publicly accessible.</p>
      <h2 className="text-3xl font-semibold mb-4 uppercase">CONTACT FORMS:</h2>
      <p className="font-semibold mb-4">If you use our contact form, we will collect personal data that is necessary to respond to your inquiry. We keep contact form submissions for a certain period for customer service purposes, but we do not use the information submitted through them for marketing purposes.</p>
      <h2 className="text-3xl font-semibold mb-4 uppercase">COOKIES:</h2>
      <p className="font-semibold mb-4">We use cookies on our website. Cookies are small pieces of data that are stored on a user’s device when they visit a website. They are used to improve the user experience, such as remembering user preferences and login information.</p>
      <h2 className="text-3xl font-semibold mb-4 uppercase">ANALYTICS:</h2>
      <p className="font-semibold mb-4">We use Google Analytics to collect anonymous analytics data. This helps us understand how visitors use our website and make improvements. Users can opt-out of analytics tracking by using Google’s Opt-out Browser Add-on.</p>
      <h2 className="text-3xl font-semibold mb-4 uppercase">WHO WE SHARE YOUR DATA WITH: WE DO NOT SHARE PERSONAL DATA WITH ANYONE.</h2>
      <p className="font-semibold mb-4">How long we retain your data: We retain personal data collected or processed by the website for a period of time that is necessary to fulfill the purposes outlined in this privacy policy. For example, we keep contact form entries for six months, analytics records for a year, and customer purchase records for ten years.</p>
      <h2 className="text-3xl font-semibold mb-4 uppercase">WHAT RIGHTS YOU HAVE OVER YOUR DATA:</h2>
      <p className="font-semibold mb-4">You have the right to request a copy of your personal data that we have collected, to request that we delete your personal data, and to object to the processing of your personal data. You can exercise these rights by contacting us at <Link href={'/privacy-policy/info@ghostcarts.com'} className="font-semibold"></Link>.</p>
      <h2 className="text-3xl font-semibold mb-4 uppercase">WHAT DO WE DO WITH YOUR INFORMATION?</h2>
      <p className="font-semibold mb-4">When you place an order from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address, and email address. When you browse our store, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.</p>
      <p className="font-semibold mb-4">Email marketing, text message marketing, and social media marketing consent once you place an order from our website unless specified otherwise. When visitors come to our site we have third parties that may place cookies on your browsers for targeted advertising purposes. A description of the types of data (IP addresses, cookie identifiers, website activity) that our site will collect.</p>
      <h2 className="text-3xl font-semibold mb-4 uppercase">THIRD-PARTY SERVICES:</h2>
      <p className="font-semibold mb-4">In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us. However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies with respect to the information we are required to provide to them for your purchase-related transactions.</p>
      <p className="font-semibold mb-4">For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers. In particular, remember that certain providers may be located in or have facilities that are located in a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.</p>
      <p className="font-semibold">For example, if you are located in Canada and your transaction is processed by a payment gateway in the United States, then your personal information used in completing that transaction may be subject to disclosure under United States legislation, including the Patriot Act. Once you leave our store’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.</p>
    </div>
  );
}

export default page;
