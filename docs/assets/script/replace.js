fetch('../assets/svg/all.json')
  .then(response => response.json())
  .then(
    (result) => {
      const data = result.data;
      console.debug({
        message: `data fetched.`,
        data,
      })

      const elements = document.getElementsByClassName('icon');

      for (let i = 0; i < elements.length; i++) {
        const element = elements[i]
        const id = element.getAttribute('data-id')
        const found = data.find(d => d.id === id)


        element.innerHTML = found.value;

        console.debug({
          message: `replaced!`,
          element,
          id,
          found,
        });
      }
    }
  );
