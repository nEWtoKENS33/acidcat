const contracts = document.querySelectorAll('.contract');

contracts.forEach((contract) => {
  const contractButton = contract.querySelector('button');
  const contractValue = contract.querySelector('p');

  contractButton.addEventListener('click', () => {
    try {
      window.navigator.clipboard.writeText(contractValue.innerHTML);
    } catch (error) {
      alert('Clipboard write error!');
      console.error(error);
    }
  });
});
