export const sendContactForm = async (data) =>
  fetch('/api/contact/route', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Message failed to send.");
    return res.json();
  });

  export const sendVolunteerForm = async (data) =>
  fetch('/api/volunteer/route', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Volunteer form failed to send.");
    return res.json();
  });

  export const sendArtistApplication = async (data) =>
  fetch('/api/artist_apply/route', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Artist application form failed to send.");
    return res.json();
  });

