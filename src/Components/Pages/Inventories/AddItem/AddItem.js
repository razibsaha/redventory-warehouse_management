import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading";
import Modal from "../../../Shared/Modal/Modal";

const AddItem = () => {
  const [showModal, setShowModal] = useState(false);
  const [user,loading] = useAuthState(auth);
  
  
  console.log(user);
  

  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "Torch USB Microphone",
      email: `${user?.email}`,
      category: "Electronics",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto nobis praesentium aperiam magni deserunt? Earum consequuntur natus eveniet ratione, inventore illo quasi doloremque molestiae ad error sint alias vel minima.",
      image: `https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1643289660-roccat-microphone-1643289647.jpg`,
    },
    price: 0,
    quantity: 0,
    sold: 0,
  });


  if (loading) {
    return <Loading></Loading>;
  }
  //const textDetails = "Are you sure you want to Add "

  const onSubmit = (data) => {
    const url = `https://red-inventory.herokuapp.com/inventory`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    console.log(data);
  };

  const handleAdd = () => {
    setShowModal(true);
  };

  return (
    <div className="container mx-auto lg:mt-40 mt-24">
      <div className="md:flex justify-center items-center mb-3">
        <h1 className="name text-center">Add a new item</h1>
      </div>
      <div className="flex-col justify-center items-center w-full">
        <form
          className="container mx-auto w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex">
            <div className="flex flex-col w-50 mr-5">
              <input
                placeholder="Name"
                className="rounded-lg p-3 border-1 w-full  text-gray-800 border-gray-200 bg-slate-100 mb-3"
                {...register("name", { required: true, maxLength: 300 })}
              />
              <input
                value={user?.email}
                readOnly
                className="rounded-lg p-3 border-1  text-green-500 border-gray-200 bg-slate-100 mb-3"
                {...register("email", { required: true, maxLength: 300 })}
              />
              {/* <fieldset className="rounded-lg p-3 border-1  text-gray-300 border-gray-200 bg-slate-100 mb-3" disabled>
          <input {...register("email")} value={user.email} />
        </fieldset> */}

              <select
                className="rounded-lg p-3 border-1  text-gray-400 border-gray-200 bg-slate-100 mb-3"
                {...register("category",{ required: true, maxLength: 300 })}
              >
                <option
                  className="active:bg-slate-800 border-1 text-gray-400 border-gray-200 h-5"
                  value="Jewelry"
                >
                  Jewelry
                </option>
                <option
                  className="rounded-lg p-3 border-1  text-gray-400 border-gray-200 py-5"
                  value="Electronics"
                >
                  Electronics
                </option>
                <option
                  className="rounded-lg p-3 border-1  text-gray-400 border-gray-200 py-5"
                  value="men's clothing"
                >
                  Men's clothing
                </option>
              </select>

              {/* <input
                placeholder="Category"
                className="rounded-lg p-3 border-1  text-gray-800 border-gray-200 bg-slate-100 mb-3"
                {...register("category", { required: true, maxLength: 30 })}
              /> */}
              <textarea
                placeholder="Description"
                className="h-32 rounded-lg p-3 border-1  text-gray-800 border-gray-200 bg-slate-100 mb-3"
                {...register("description", {
                  required: true,
                  maxLength: 1200,
                })}
              />
            </div>
            <div className="flex flex-col w-50">
              <input
                placeholder="Price"
                type="number"
                className="rounded-lg p-3 border-1  text-gray-800 border-gray-200 bg-slate-100 mb-3"
                {...register("price", { required: true, maxLength: 9 })}
              />
              <input
                placeholder="Quantity"
                type="number"
                className="rounded-lg p-3 border-1  text-gray-800 border-gray-200 bg-slate-100 mb-3"
                {...register("quantity", { required: true, maxLength: 9 })}
              />
              <input
                placeholder="Sold"
                type="number"
                className="rounded-lg p-3 border-1  text-gray-800 border-gray-200 bg-slate-100 mb-3"
                {...register("sold", { required: true, maxLength: 9 })}
              />
              <input
                value={user.displayName}
                readOnly
                className="rounded-lg p-3 border-1  text-gray-400 border-gray-200 bg-slate-100 mb-3"
                {...register("supplier", { maxLength: 300 })}
              />
              <input
                placeholder="Image URL"
                className="rounded-lg p-3 border-1  text-gray-800 border-gray-200 bg-slate-100 mb-3"
                {...register("image", { required: true, maxLength: 300 })}
              />
            </div>
          </div>

          <div className="w-full">
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              disabled={!isDirty || !isValid}
              onClick={() =>
                handleAdd(setValue("amount", 100, { isDirty: true }))
              }
              className="rounded-lg p-4  mr-0  text-slate-100 w-full border-gray-200 mb-5 disabled:bg-slate-300 bg-[#ee316b] hover:bg-[#842d72]"
              type="submit"
              value="Add item"
            />
          </div>
        </form>
      </div>
      {showModal && (
        <Modal
          textDetails={getValues()}
          changeModal={setShowModal}
          title="Add Item"
        />
      )}
    </div>
  );
};

export default AddItem;
