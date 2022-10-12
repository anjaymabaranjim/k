import { memo, useCallback, useMemo, useState} from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState(defaultData);
  const onChange = useCallback((event ) => {
      const {name, value} = event.target;
      const fieldData = {[name]: value};
      setData({...data, ...fieldData});
    },[data],
  );

  const handleSendMessage = useCallback(
    async (event) => {
      event.preventDefault();
      emailjs.send('service_0q5oye4', 'template_9svrj3g', data, 'cxoREpBJLG6BoToQf')
      .then(response => {
        console.log('SUCCESS!', response);
        setData({
          name: '',
          email: '',
          message: '',
        });
      }, error => {
        console.log('FAILED...', error);
      });
      console.log('Data to send: ', data);
    },
    [data],
  );

  const inputClasses = 'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
