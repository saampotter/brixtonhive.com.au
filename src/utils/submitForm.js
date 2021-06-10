const key = process.env.NEXT_PUBLIC_WEBFORMS_KEY;

export const submitForm = async body =>
  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      apikey: key,
      ccemail: 'hello@brixtonhive.com.au',
      ...body,
    }),
  });
