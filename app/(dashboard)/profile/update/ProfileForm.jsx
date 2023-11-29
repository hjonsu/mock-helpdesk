import { updateProfile } from "@/app/actions";
import SubmitButton from "@/app/components/SubmitButton";

export default function ProfileForm() {
  return (
    <form action={updateProfile}>
      <label>
        Full name:
        <input required placeholder="John Appleseed" name="full_name"></input>
      </label>
      <label>
        Username:
        <input
          name="username"
          required
          pattern="[A-Za-z9-0]{3,}"
          placeholder="3 Characters Minimum"
        ></input>
      </label>
      <label>
        Personal site:
        <input name="website" placeholder="Optional"></input>
      </label>

      <SubmitButton />
    </form>
  );
}
