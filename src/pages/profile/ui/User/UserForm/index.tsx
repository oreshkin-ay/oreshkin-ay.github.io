import { FieldErrors, UseFormRegister } from "react-hook-form";

import clsx from "clsx";

import { UserFormInputs } from "..";
import "./UserForm.css";

interface UserFormProps {
  register: UseFormRegister<UserFormInputs>;
  errors: FieldErrors<UserFormInputs>;
  onSave: (data: UserFormInputs) => void;
}

const UserForm = ({ register, errors }: UserFormProps) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="form-container">
      <div className="form-row">
        <div className="form-field">
          <label className="form-label">Имя</label>
          <input
            type="text"
            placeholder="Введите имя"
            {...register("name")}
            className={clsx("form-input", {
              "form-input-error": errors.name,
            })}
          />
          {errors.name && (
            <span className="form-error">{errors.name.message}</span>
          )}
        </div>

        <div className="form-field">
          <label className="form-label">Номер телефона</label>
          <input
            type="tel"
            placeholder="Введите номер телефон"
            {...register("phone")}
            className={clsx("form-input", {
              "form-input-error": errors.phone,
            })}
          />
          {errors.phone && (
            <span className="form-error">{errors.phone.message}</span>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label className="form-label">Дата рождения</label>
          <input
            type="date"
            {...register("birthDate")}
            className={clsx("form-input", {
              "form-input-error": errors.birthDate,
            })}
          />
          {errors.birthDate && (
            <span className="form-error">{errors.birthDate.message}</span>
          )}
        </div>

        <div className="form-field">
          <label className="form-label">Пол</label>
          <select
            {...register("gender")}
            className={clsx("form-input", {
              "form-input-error": errors.gender,
            })}
          >
            <option value="">Выберите</option>
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </select>
          {errors.gender && (
            <span className="form-error">{errors.gender.message}</span>
          )}
        </div>
      </div>
    </form>
  );
};

export default UserForm;
