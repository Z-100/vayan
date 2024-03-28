import React, {useState} from 'react'

export const ContactFormContainer = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="my-2">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-2 py-1 border rounded-md focus:outline-none bg-dark-2 focus:border-purple-500"
                />
            </div>
            <div className="my-2">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-2 py-1 border rounded-md focus:outline-none bg-dark-2 focus:border-purple-500"
                />
            </div>
            <div className="my-2">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded-md focus:outline-none bg-dark-2 focus:border-purple-500"
                />
            </div>
            <div className="my-2">
                <label htmlFor="message">Your Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-2 py-1 border rounded-md focus:outline-none bg-dark-2 focus:border-purple-500"
                />
            </div>
            <button
                className="w-full px-2 py-1 border-[1px] border-b-light-0 rounded-md bg-dark-3 border-purple-500"
                type="submit"
            >
                Submit
            </button>
        </form>
    );
}
