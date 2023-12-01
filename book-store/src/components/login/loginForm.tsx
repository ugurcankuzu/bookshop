import { motion } from "framer-motion";

export default function LoginForm() {
  return (
    <form>
      <div>
        <motion.p>E-Mail</motion.p>
        <input type="email" name="" id="" />
      </div>
      <div>
        <motion.p>Password</motion.p>
        <input type="password" name="" id="" />
      </div>
      <button>Login</button>
    </form>
  );
}
