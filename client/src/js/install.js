const butInstall = document.getElementById('buttonInstall');

let installPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();

  installPrompt = event;

  butInstall.style.display = 'block';
  console.log('Before Install Prompt:', installPrompt);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (installPrompt) {
    installPrompt.prompt();

    const choice = await installPrompt.choice;
    console.log('Choice:', choice);

    if (choice.outcome === 'accepted') {
      console.log('Begining install...');
    } else {
      console.log('Installation cancelled');
    }

    installPrompt = null;
  }

  butInstall.style.display = 'none';
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('App installed successfully');
  butInstall.style.display = 'none';
});