
/* -----> Component <----- */
const ContactForm = () => {

    // Return JSX
    return (
        <div className="max-w-screen-md px-4 py-8 mx-auto lg:py-16">
            <form className="p-5 space-y-8 rounded-md shadow-xl shadow-stone-500" onSubmit={(event) => event.preventDefault()}>
                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white ">Your Name</label>
                    <input type="text" id="subject" className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter Your Name" required />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="example@email.com" required />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-white dark:text-gray-400">Your message</label>
                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Your Message"></textarea>
                </div>

                <button type="submit" className="px-5 py-3 text-sm font-medium text-center text-white bg-pink-600 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:bg-green-700" onClick={() => console.log("Hello")}> Send message</button>
            </form>
        </div >

    );
}

/* -----> Export <----- */
export default ContactForm;