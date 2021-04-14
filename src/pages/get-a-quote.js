import { useState } from 'react';
import Container from '../components/Container';
import ContentContainer from '../components/ContentContainer';

export default function GetAQuoteContainer() {
  const [state, setState] = useState({ status: 'idle', name: '' });

  const handleSubmit = async event => {
    try {
      event.preventDefault();
      setState(s => ({ status: 'submitting', ...s }));

      const body = {
        apikey: '20e1db42-968a-4d76-bb8f-caba2b85658a',
        ccemail: 'hello@brixtonhive.com.au',
        name: event.target.name.value,
        email: event.target.email.value,
        contact_number: event.target.contact_number.value,
        storage_period: event.target.storage_period.value,
        estimated_space: event.target.estimated_space.value,
      };

      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      try {
        let [name] = body.name.includes(' ') ? body.name.split(' ') : [body.name];
        let [s, ...rest] = name.split('');
        console.log({ s, rest });
        name = s.toUpperCase() + rest.join('');
        setState({ status: 'submitted', name });
      } catch {
        setState(s => ({ status: 'submitted', ...s }));
      }
    } catch (err) {
      console.error(err);
      setState(s => ({ status: 'idle', ...s }));
    }
  };

  return (
    <Container className="bg-c-brown-500">
      <ContentContainer>
        <div className="flex flex-col items-center w-full space-y-16">
          {state.status === 'idle' && (
            <Form isSubmitting={state.status === 'submitting'} onSubmit={handleSubmit} />
          )}
          {state.status === 'submitted' && <Success name={state.name} />}
        </div>
      </ContentContainer>
    </Container>
  );
}

const Form = ({ isSubmitting, onSubmit }) => (
  <>
    <p className="text-3xl font-medium text-center text-white lg:text-6xl">Get a quote</p>

    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center w-full max-w-md mx-auto space-y-6"
    >
      <Input label="Name" id="name" name="name" autoComplete="given-name" type="text" />
      <Input id="email" name="email" type="email" autoComplete="email" label="Email address" />
      <Input
        type="tel"
        id="contact_number"
        name="contact_number"
        label="Contact number"
        autoComplete="mobile-number"
      />
      <Input
        type="text"
        label="Storage Period"
        id="storage_period"
        name="storage_period"
        placeholder="E.g. 18 months"
      />
      <Input
        type="text"
        id="estimated_space"
        name="estimated_space"
        label="Estimated space required (m)"
        placeholder="E.g. 4x3"
      />

      <button
        type="submit"
        className="inline-block w-48 p-4 text-lg text-center transition bg-white rounded-full shadow-lg text-c-blue-900 transform-gpu hover:scale-95"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  </>
);

const Success = ({ name }) => (
  <>
    <p className="text-3xl font-medium text-center text-white lg:text-6xl">
      Thanks for submitting{name && ` ${name}`}
    </p>

    <p className="text-xl text-center text-c-brown-900">
      We'll be in touch as soon as possible with a quote. <br />
      Enjoy your day.
    </p>
  </>
);

const Input = ({ id, name, label, ...rest }) => (
  <div className="flex-1 w-full">
    <label htmlFor="first_name" className="block font-medium focus:outline-none text-c-brown-900">
      {label}
    </label>

    <div className="mt-1">
      <input
        id={id}
        required
        name={name}
        className="block w-full px-3 py-2 rounded-lg shadow-sm focus:ring-3 sm:text-lg"
        {...rest}
      />
    </div>
  </div>
);
