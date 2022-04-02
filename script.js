const button = document.getElementsByClassName("button")[0];
const span = document.getElementsByClassName("span")[0];

const toggleClass = (element, classToggle, timeout) => {
  return new Promise((resolve, reject) => {
    try {
      element.classList.add(classToggle);
      const id = setTimeout(() => {
        element.classList.remove(classToggle);
        console.log(1111);
      }, timeout);
      //   clearTimeout(id);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

setInterval(() => {
  toggleClass(button, "darkBeforeBtn", 100)
    .then(() => {
      toggleClass(span, "darkBeforeSpan", 300);
    })
    .then(() => {
      toggleClass(button, "darkAfterBtn", 600);
    })
    .then(() => {
      toggleClass(span, "darkAfterSpan", 900);
    });
}, 1000);
