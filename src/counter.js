export function setupSphere(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `
    <div id="ashin" class="sphere-container relative w-48 h-48">
    <div class="bg-pink w-48 h-48 rounded-full absolute"></div>
    <div class="sphere-eye absolute inset-0 flex justify-center items-center">
      <div class="relative bg-white w-10 h-14 rounded-full-full m-2">
        <div class="absolute bg-dark-blue w-7 h-10 rounded-full-full inset-2.5"></div>
      </div>
      <div class="relative bg-white w-10 h-14 rounded-full-full m-2">
        <div class="absolute bg-dark-blue w-7 h-10 rounded-full-full inset-y-2.5 inset-x-0.5"></div>
      </div>
    </div>
    <div class="sphere-mouse absolute">
      <img src="./src/assets/svg/ashin/mouse.svg" />
    </div>
  </div>
      `
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

