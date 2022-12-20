import React from 'react';

const Register = () => {
  return (
    <>
    <div class="block p-6 rounded-lg shadow-lg max-w-md bg-teal-400">
    <h1 className="text-3xl border-b-4 border-black border-orange-500 mb-4">Register</h1>
      <form>
        <div class="grid grid-cols-2 gap-4">
          <div class="form-group mb-6">
            <input type="text" class="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
              aria-describedby="emailHelp123" placeholder="First name" />
          </div>
          <div class="form-group mb-6">
            <input type="text" class="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
              aria-describedby="emailHelp124" placeholder="Last name" />
          </div>
        </div>
        <div class="form-group mb-6">
          <input type="email" class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
            placeholder="Email address" />
        </div>
        <div class="form-group mb-6">
          <input type="password" class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
            placeholder="Password" />
        </div>
        <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <select class="form-select appearance-none
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
              <option selected>Select Option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
              <option value="5">Option 5</option>
              <option value="6">Option 6</option>
          </select>
        </div>
      </div>
        {/* <div class="form-group form-check text-center mb-6">
          <input type="checkbox"
            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
            id="exampleCheck25" checked />
          <label class="form-check-label inline-block text-gray-800" for="exampleCheck25">Subscribe to our newsletter</label>
        </div> */}
        <button type="button" class="
          w-full
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out">Sign up</button>
      </form>
    </div>
    </>
  )
}

export default Register;