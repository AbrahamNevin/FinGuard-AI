export default function Header() {

    return (

        <header
            className="
      flex
      justify-between
      items-center
      border-b
      bg-white
      px-8
      py-5
    "
        >

            <div>

                <h2 className="text-3xl font-bold">
                    Dashboard
                </h2>

                <p className="text-slate-500">
                    AI Powered Credit Risk Assessment
                </p>

            </div>

            <div className="flex items-center gap-3">

                <div
                    className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-slate-900
          text-white
          font-semibold
        "
                >
                    N
                </div>

                <div>

                    <p className="font-semibold">
                        Nevin
                    </p>

                    <p className="text-sm text-slate-500">
                        AI Developer
                    </p>

                </div>

            </div>

        </header>

    );

}