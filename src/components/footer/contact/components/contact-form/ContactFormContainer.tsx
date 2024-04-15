import React, {useState} from 'react'

export const ContactFormContainer = () => {

    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        message: '',
    });

    const openMail = (
        message: string,
        name: string,
        phoneNumber: string,
    ) => {
        const recipient = 'z100@zindustries.ch';
        const subject = 'Interested in hiring';

        message += `\n\nName: ${name}`;
        if (phoneNumber) message += `\nPhone: ${phoneNumber}`;

        window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {name, phoneNumber, message} = formData;
        openMail(message, name, phoneNumber);
        resetForm();
    };

    const resetForm = () => {
        setFormData({name: '', phoneNumber: '', message: ''});
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="my-2">
                <label htmlFor="name">Name/Company</label>
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
