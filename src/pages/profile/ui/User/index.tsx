import React from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import "./User.css";
import UserForm from "./UserForm";

const userFormSchema = z.object({
  name: z
    .string()
    .min(1, "Имя обязательно")
    .max(50, "Имя не должно превышать 50 символов"),
  phone: z
    .string()
    .min(1, "Номер телефона обязателен")
    .regex(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/,
      "Некорректный номер телефона",
    ),
  birthDate: z.string().refine(
    (value) => {
      const date = new Date(value);
      return !isNaN(date.getTime());
    },
    { message: "Некорректная дата" },
  ),
  gender: z.string().refine((val) => val === "male" || val === "female", {
    message: "Пол обязателен",
  }),
});

export type UserFormInputs = z.infer<typeof userFormSchema>;

const User = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormInputs>({
    resolver: zodResolver(userFormSchema),
  });

  const handleCancel = () => {
    console.log("Отмена");
  };

  const handleSave = (formData: UserFormInputs) => {
    console.log("Сохранить", formData);
  };

  return (
    <div className="profile-info-content">
      <h1 className="page-title">Информация о вас</h1>
      <div className="content-sections">
        <UserForm register={register} errors={errors} onSave={handleSave} />
      </div>
      <div className="button-group">
        <button className="button cancel-button" onClick={handleCancel}>
          Отмена
        </button>
        <button
          className="button save-button"
          onClick={handleSubmit(handleSave)}
        >
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default User;
