// 'use client'

// import { useRef, useState } from 'react'
// import emailjs from '@emailjs/browser'

// export default function SayHello() {
//     const formRef = useRef<HTMLFormElement>(null)
//     const [isSent, setIsSent] = useState(false)
//     const [isLoading, setIsLoading] = useState(false)

//     const sendEmail = (e: React.FormEvent) => {
//         e.preventDefault()
//         setIsLoading(true)

//         const form = formRef.current;
//         if (!form) return;

//         // To me
//         emailjs
//             .sendForm(
//                 'service_467yox8',
//                 'template_1dj9k18',
//                 form,
//                 '8dJz8YYjPOszkBkuV'
//             )
//             .then(() => {
//                 // ပထမ message ပို့ပြီးတဲ့နောက် အလိုအလျောက် client ကို auto-reply ပို့မယ်
//                 return emailjs.sendForm(
//                     'service_467yox8', 
//                     'template_mqszqva', 
//                     form, 
//                     '8dJz8YYjPOszkBkuV');
//             })
//             .then(() => {
//                 setIsSent(true);
//                 setIsLoading(false);
//                 form.reset();
//             })
//             .catch((error) => {
//                 console.error('FAILED...', error.text);
//                 setIsLoading(false);
//             })
//     }

//     return (
//         <div className="bg-whitemax-w-xl mx-auto p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Say Hello</h2>

//             {isSent ? (
//                 <p className="text-green-600 font-medium">Thanks! Your message has been sent.</p>
//             ) : (
//                 <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Name</label>
//                         <input
//                             type="text"
//                             name="user_name"
//                             placeholder='Your Name'
//                             required
//                             className="mt-1 w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Email</label>
//                         <input
//                             type="email"
//                             name="user_email"
//                             placeholder='Your Email'
//                             required
//                             className="mt-1 w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Message</label>
//                         <textarea
//                             name="message"
//                             placeholder='Please write your message here...'
//                             rows={4}
//                             required
//                             className="mt-1 w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                         ></textarea>
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full bg-indigo-600 text-white font-medium py-2 rounded-md hover:bg-indigo-700 transition"
//                         disabled={isLoading}
//                     >
//                         {isLoading ? 'Sending...' : 'Submit'}
//                     </button>
//                 </form>
//             )}
//         </div>
//     )
// }
