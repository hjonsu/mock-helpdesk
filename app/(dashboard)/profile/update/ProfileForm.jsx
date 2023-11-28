import { updateProfile } from "@/app/actions";
import SubmitButton from "@/app/components/SubmitButton";

export default function ProfileForm() {
  return (
    <form action={updateProfile}>
      <label>
        First name:
        <input required placeholder="John" name="first"></input>
      </label>
      <label>
        Last name:
        <input required placeholder="Appleseed" name="last"></input>
      </label>
      <SubmitButton />
    </form>
  );
}
