import Link from "next/link";

export const JoinGravityTeam = () => {
  return (
    <div className="max-w-[1056px] mx-auto text-white flex pt-[110px] pb-[100px]">
      <h2 className="font-medium text-[3.3125rem] flex-1">
        Join
        <br />
        <span className="pl-3">Gravity Team</span>
      </h2>
      <div className="flex-1 pl-5 pt-1">
        <div className="max-w-[510px]">
        <p className="text-[1.1875rem] text-[#E5E5E5]">
          Join our community of innovators, problem solvers and owners who apply
          scientific discovery techniques to make crypto markets a better place
          for everyone.
        </p>
        <p className="text-[1.1875rem] text-[#E5E5E5] mt-[28px] leading-[1.55]">
          As we emphasize it in our name – Gravity Team, we are a team. A team
          of bright, talented people, each masters of their specialty, curious
          about the world and eager to solve the new exciting cryptocurrency
          market problems, build cool stuff and have fun whilst doing so!
        </p>
        <Link className="under-line inline-block text-lg mt-[38px]" href="">
          Learn more about working with us
        </Link>
        </div>
        
      </div>
    </div>
  );
};
