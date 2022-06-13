const FIREBASE_DOMAIN = 'https://react-http-8e7b6-default-rtdb.europe-west1.firebasedatabase.app/';

export async function getAllReminders() {
  const response = await fetch(`${FIREBASE_DOMAIN}/reminders.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch reminder.');
  }

  const transformedReminders = [];

  for (const key in data) {
    const reminderObj = {
      id: key,
      ...data[key],
    };

    transformedReminders.push(reminderObj);
  }

  return transformedReminders;
}



export async function addReminder(reminderData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/reminders.json`, {
    method: 'POST',
    body: JSON.stringify(reminderData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create reminder.');
  }

  return null;
}

