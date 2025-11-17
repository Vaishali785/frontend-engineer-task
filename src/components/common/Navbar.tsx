import { FilterIcon } from "@/assets/utility";

type Props = {
    setShowMobileFilters: React.Dispatch<React.SetStateAction<boolean>>
}
function Navbar({setShowMobileFilters}: Props) {
    return (
        <div
  className="bg-white sticky top-0 z-40 flex h-14 w-full flex-col items-center shadow-md xl:h-18"
  data-sentry-component="MainNavbar"
  data-sentry-source-file="main-navbar.tsx"
>
  <nav
    className="flex w-full max-w-(--breakpoint-xl) items-center justify-between px-4 py-2 xl:px-0 xl:py-4"
    role="navigation"
    aria-label="Main Navigation"
  >
    <div className="w-22 xl:hidden">
      <button
        className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-lg text-xs font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-accent text-foreground shadow-xs hover:bg-accent/80 h-9 w-9 p-0"
        aria-label="Go back"
      >
        <svg
          width={48}
          height={48}
          viewBox="0 0 49 48"
          fill="none"
          className="!size-5"
          data-sentry-element="svg"
          data-sentry-component="LeftArrowIcon"
          data-sentry-source-file="utility.tsx"
        >
          <path
            d="M42 24H5.6875"
            stroke="#292D32"
            strokeWidth={4}
            strokeLinecap="round"
            data-sentry-element="path"
            data-sentry-source-file="utility.tsx"
          />
          <path
            d="M21.6332 41.3861L6.71606 26.4689C6.39015 26.1458 6.13143 25.7613 5.95508 25.3373C5.77829 24.9136 5.6875 24.4593 5.6875 24.0001C5.6875 23.541 5.77829 23.0867 5.95508 22.6629C6.13143 22.239 6.39015 21.8545 6.71606 21.5316L21.6332 6.61426"
            stroke="#292D32"
            strokeWidth={4}
            strokeLinecap="round"
            data-sentry-element="path"
            data-sentry-source-file="utility.tsx"
          />
        </svg>
      </button>
    </div>
    <a
      className="flex items-center xl:hidden"
      aria-label="Go to homepage"
      href="/?entry_point=navbar&cta=logo-mobile"
    >
      <svg
        width={36}
        height={36}
        viewBox="0 0 34 32"
        fill="none"
        className="w-max"
        data-sentry-element="svg"
        data-sentry-component="LogoIcon"
        data-sentry-source-file="logo.tsx"
      >
        <path
          clipRule="evenodd"
          d="M31.5344 10.2207L31.4911 10.1878L31.2921 10.0389L31.254 10.0113L19.1467 0.941584C19.1467 0.941584 19.1467 0.941584 19.145 0.941584L18.823 0.700993C18.823 0.700993 18.8213 0.700991 18.8213 0.699261C18.167 0.257893 17.3795 0 16.5314 0H16.5089C15.5932 0 14.7486 0.299433 14.0666 0.806573C14.0493 0.818689 14.0337 0.832541 14.0164 0.844657L1.71527 10.058C1.71354 10.0597 1.7118 10.0597 1.71007 10.0614L1.57507 10.1636C1.57334 10.1653 1.5716 10.1653 1.56987 10.167C1.44006 10.2691 1.31718 10.3782 1.20121 10.4942C0.458676 11.2367 0 12.2614 0 13.3933V27.8996C0 30.1636 1.83643 32 4.10039 32H5.77585C9.51623 32 12.5625 28.9831 12.5833 25.2428C12.5833 25.2185 12.5833 25.196 12.5833 25.1718V25.1562V25.1545C12.5816 25.1406 12.5816 25.1251 12.5816 25.1112C12.5816 25.0974 12.5816 25.0818 12.5833 25.0679V25.0662C12.5798 24.6871 12.5348 24.3012 12.4431 23.9169C12.161 22.7192 11.4859 21.717 10.5859 21.0143C9.68585 20.3115 8.56252 19.9083 7.38381 19.9083H7.37861C7.19861 19.9083 7.03591 19.8356 6.91821 19.7179C6.80051 19.6002 6.72782 19.4375 6.72782 19.2575C6.72782 19.0775 6.80051 18.9148 6.91821 18.7971C7.03591 18.6794 7.19861 18.6067 7.37861 18.6067C8.83599 18.6067 10.1514 18.0078 11.0965 17.0437C12.0104 16.1108 12.5764 14.8351 12.5816 13.4262V13.4245C12.5816 13.4176 12.5816 13.4106 12.5816 13.4037V13.4003C12.5816 13.3916 12.5816 13.3847 12.5816 13.3778V13.376C12.5868 13.2064 12.6595 13.0524 12.772 12.9399C12.8897 12.8222 13.0524 12.7495 13.2324 12.7495C13.4106 12.7495 13.5751 12.8222 13.6928 12.9399C13.8105 13.0576 13.8832 13.2202 13.8832 13.4003V13.4037C13.8832 14.8196 14.4492 16.1039 15.3665 17.042C15.3803 17.0558 15.3925 17.0697 15.4063 17.0835C16.3479 18.0251 17.6478 18.6067 19.0861 18.6067C19.2661 18.6067 19.4288 18.6794 19.5465 18.7971C19.6642 18.9148 19.7369 19.0775 19.7369 19.2575C19.7369 19.6158 19.4479 19.9048 19.0913 19.9083H19.0878C18.6932 19.9083 18.2934 19.9533 17.8935 20.0485C16.6958 20.3306 15.6936 21.0056 14.9909 21.9057C14.2986 22.7901 13.897 23.8927 13.8849 25.0524C13.8849 25.061 13.8849 25.0697 13.8849 25.0783V25.0818C13.8849 25.0922 13.8866 25.1008 13.8866 25.1112C13.8866 25.1199 13.8866 25.1268 13.8866 25.1354C13.8866 25.1389 13.8866 25.1406 13.8866 25.1441C13.8866 25.1753 13.8866 25.2064 13.8866 25.2358C13.9074 28.9779 16.952 31.9983 20.6941 31.9983H28.9416C30.0736 31.9983 31.0982 31.5396 31.8408 30.7971C32.5833 30.0545 33.042 29.0299 33.042 27.8979V13.3241C33.0177 12.0744 32.4362 10.9598 31.5344 10.2207ZM26.103 13.1545H26.1013C25.9005 13.1545 25.698 13.177 25.4955 13.2254C24.8879 13.3691 24.3791 13.7118 24.0225 14.1688C23.6711 14.6188 23.4669 15.1778 23.4617 15.7646V15.7802V15.7819C23.4617 15.7871 23.4617 15.7906 23.4617 15.7958C23.4617 15.7992 23.4617 15.8044 23.4617 15.8079V15.8131C23.453 15.9879 23.3077 16.1263 23.1311 16.1263C23.0394 16.1263 22.958 16.09 22.8974 16.0294C22.8421 15.974 22.8074 15.9013 22.8022 15.8183C22.8022 15.8113 22.8022 15.8044 22.8022 15.7958C22.8022 15.7888 22.8022 15.7819 22.8022 15.775V15.7733C22.8005 15.5811 22.778 15.3855 22.7313 15.19C22.5876 14.5824 22.2449 14.0736 21.788 13.717C21.331 13.3604 20.7616 13.1562 20.1627 13.1562H20.161C20.0692 13.1562 19.9879 13.1199 19.9273 13.0593C19.8667 13.0004 19.8304 12.9173 19.8304 12.8256C19.8304 12.7339 19.8667 12.6525 19.9273 12.592C19.9879 12.5314 20.0692 12.495 20.161 12.495C20.9 12.495 21.5681 12.1904 22.0476 11.7023C22.5115 11.228 22.7988 10.5807 22.8005 9.86759V9.86586C22.8005 9.8624 22.8005 9.85894 22.8005 9.85547V9.85374C22.8005 9.85028 22.8005 9.84682 22.8005 9.84162V9.83989C22.804 9.75335 22.8403 9.67547 22.8974 9.61835C22.9563 9.55777 23.0394 9.52142 23.1311 9.52142C23.2228 9.52142 23.3042 9.55777 23.3648 9.61835C23.4254 9.67893 23.4617 9.76027 23.4617 9.85201V9.85547C23.4617 10.2155 23.5344 10.5582 23.6642 10.8698C23.794 11.1813 23.9827 11.4634 24.2146 11.7023C24.2215 11.7092 24.2285 11.7161 24.2354 11.7231C24.7131 12.2008 25.3726 12.4968 26.103 12.4968C26.1947 12.4968 26.2761 12.5331 26.3366 12.5937C26.3972 12.6525 26.4336 12.7356 26.4336 12.8273C26.4301 13.0074 26.283 13.1527 26.103 13.1545Z"
          fill="#FF6D33"
          fillRule="evenodd"
          data-sentry-element="path"
          data-sentry-source-file="logo.tsx"
        />
      </svg>
    </a>
    <a
      className="hidden items-center xl:flex"
      aria-label="Go to homepage"
      href="/?entry_point=navbar&cta=logo-web"
    >
      <svg
        width={36}
        height={36}
        viewBox="0 0 463 107"
        fill="none"
        className="w-32"
        data-sentry-element="svg"
        data-sentry-component="LogoIconTextColored"
        data-sentry-source-file="logo.tsx"
      >
        <path
          d="m105.269 34.12-.144-.11-.665-.498-.127-.092L63.916 3.143h-.005l-1.075-.803s-.006 0-.006-.006A13.6 13.6 0 0 0 55.186 0h-.075c-3.057 0-5.877 1-8.153 2.693-.058.04-.11.086-.168.127L5.726 33.576c-.006.006-.012.006-.017.011l-.451.341c-.006.006-.012.006-.017.012q-.65.51-1.231 1.092A13.64 13.64 0 0 0 0 44.71v48.426c0 7.557 6.13 13.688 13.688 13.688h5.593c12.487 0 22.656-10.071 22.725-22.558v-.294C42 83.926 42 83.874 42 83.827s0-.098.006-.144v-.006a17.2 17.2 0 0 0-.468-3.837 17.27 17.27 0 0 0-6.2-9.69 17.38 17.38 0 0 0-10.69-3.691h-.016a2.17 2.17 0 0 1-1.537-.636 2.17 2.17 0 0 1-.636-1.537c0-.6.243-1.144.636-1.537a2.17 2.17 0 0 1 1.537-.636c4.865 0 9.256-1.999 12.41-5.217A17.3 17.3 0 0 0 42 44.82v-.168c.018-.566.26-1.08.636-1.456a2.176 2.176 0 0 1 3.074 0c.393.393.635.936.635 1.537v.012a17.32 17.32 0 0 0 4.952 12.145c.046.046.087.093.133.139a17.3 17.3 0 0 0 12.284 5.084 2.166 2.166 0 0 1 2.172 2.173 2.174 2.174 0 0 1-2.155 2.173h-.011c-1.318 0-2.652.15-3.987.468a17.27 17.27 0 0 0-9.69 6.2 17.35 17.35 0 0 0-3.692 10.504v.098c0 .035.006.064.006.098v.416c.07 12.492 10.233 22.575 22.725 22.575h27.532a13.64 13.64 0 0 0 9.678-4.01 13.64 13.64 0 0 0 4.01-9.678V44.479a13.71 13.71 0 0 0-5.033-10.36m-18.131 9.793h-.006c-.67 0-1.346.075-2.022.237a8.78 8.78 0 0 0-4.917 3.149 8.8 8.8 0 0 0-1.872 5.327v.162a1.104 1.104 0 0 1-1.884.722 1.08 1.08 0 0 1-.318-.705v-.15a8.7 8.7 0 0 0-.237-1.947 8.82 8.82 0 0 0-8.575-6.79h-.005a1.1 1.1 0 0 1-.78-.323 1.08 1.08 0 0 1-.324-.78c0-.306.122-.578.324-.78a1.1 1.1 0 0 1 .78-.324 8.8 8.8 0 0 0 6.298-2.646 8.77 8.77 0 0 0 2.514-6.125v-.092a1.105 1.105 0 0 1 2.207.04v.012c0 1.202.243 2.346.676 3.386a8.9 8.9 0 0 0 1.837 2.78l.07.068a8.8 8.8 0 0 0 6.234 2.583c.306 0 .578.122.78.324.202.196.324.474.324.78a1.116 1.116 0 0 1-1.104 1.092m44.55 41.58V28.237h21.026q5.747 0 10.169 2.08c2.947 1.387 5.258 3.404 6.922 6.05q2.496 3.968 2.496 9.643 0 5.599-2.531 9.569c-1.687 2.646-3.998 4.674-6.922 6.09-2.923 1.41-6.304 2.12-10.134 2.12h-10.742v21.708h-10.284zm10.284-30.786h10.892q2.798.002 4.842-1.098a7.9 7.9 0 0 0 3.178-3.062q1.134-1.968 1.132-4.536.002-2.643-1.132-4.576c-.757-1.288-1.815-2.294-3.178-3.027-1.364-.728-2.976-1.098-4.842-1.098h-10.892zm58.462-12.154v8.77h-3.553c-2.826 0-5.091.867-6.807 2.612q-2.572 2.61-2.571 7.298v24.285h-9.909V43.008h9.302v5.796q1.397-3.043 3.744-4.438c2.04-1.208 4.502-1.814 7.373-1.814zm23.281 42.938q-6.05.002-11.002-2.797c-3.305-1.866-5.922-4.408-7.863-7.638q-2.913-4.836-2.912-11.042 0-6.197 2.912-11.042a21.26 21.26 0 0 1 7.829-7.638q4.914-2.799 11.042-2.797c4.033 0 7.69.936 10.966 2.797q4.916 2.798 7.829 7.598t2.913 11.082q0 6.206-2.947 11.042a21.53 21.53 0 0 1-7.864 7.638c-3.288 1.86-6.916 2.797-10.903 2.797m0-9.077q3.328-.001 5.859-1.59c1.687-1.057 3.027-2.53 4.01-4.425q1.473-2.837 1.473-6.39c0-2.422-.491-4.548-1.473-6.391q-1.473-2.757-4.01-4.386c-1.687-1.086-3.646-1.623-5.859-1.623-2.271 0-4.259.543-5.975 1.623q-2.573 1.63-4.044 4.386c-.983 1.843-1.474 3.97-1.474 6.39q0 3.556 1.474 6.39c.982 1.89 2.334 3.363 4.044 4.427q2.576 1.587 5.975 1.589m67.414-23.375c-1.843-3.224-4.322-5.795-7.448-7.713s-6.633-2.872-10.516-2.872q-4.765 0-8.395 1.855c-1.936.988-3.548 2.294-4.842 3.906v-5.195h-9.303v56.607h9.909V80.524q1.82 1.906 4.351 3.109 3.742 1.775 8.205 1.774c3.981 0 7.534-.942 10.666-2.837q4.69-2.834 7.413-7.748c1.815-3.277 2.722-6.911 2.722-10.892q.001-6.048-2.762-10.892m-8.997 17.404q-1.475 2.8-4.119 4.385c-1.763 1.058-3.785 1.59-6.05 1.59q-3.25-.001-5.859-1.59-2.61-1.586-4.085-4.385-1.473-2.802-1.473-6.425 0-3.556 1.473-6.39 1.476-2.834 4.085-4.427 2.608-1.587 5.859-1.589 3.406.001 6.05 1.624a11.35 11.35 0 0 1 4.119 4.385c.983 1.844 1.474 3.97 1.474 6.39q0 3.632-1.474 6.432"
          fill="#FF6D33"
          data-sentry-element="path"
          data-sentry-source-file="logo.tsx"
        />
        <path
          d="M314.867 85.492q-6.577 0-11.457-3.138t-6.691-8.51l7.413-3.554c1.057 2.317 2.531 4.137 4.426 5.443q2.833 1.965 6.315 1.964 2.723-.001 4.311-1.207c1.057-.804 1.589-1.867 1.589-3.178q0-1.207-.642-2.005c-.427-.532-1.011-.983-1.739-1.364a14 14 0 0 0-2.38-.948l-6.732-1.889c-3.478-1.005-6.113-2.548-7.904-4.61q-2.687-3.103-2.687-7.339-.002-3.78 1.93-6.616c1.288-1.89 3.074-3.362 5.368-4.426q3.44-1.587 7.904-1.589c3.883 0 7.309.936 10.285 2.797q4.461 2.801 6.35 7.864l-7.564 3.553q-1.057-2.798-3.553-4.46-2.496-1.665-5.599-1.664-2.496-.002-3.935 1.132-1.438 1.136-1.438 2.947 0 1.134.606 1.964.606.833 1.705 1.364c.728.352 1.577.682 2.531.982l6.581 1.965c3.38 1.01 5.986 2.519 7.829 4.535 1.837 2.017 2.762 4.49 2.762 7.414 0 2.473-.659 4.651-1.965 6.54q-1.967 2.833-5.443 4.426c-2.328 1.075-5.05 1.607-8.176 1.607m41.051-.002q-6.051.002-11.001-2.797c-3.305-1.866-5.923-4.408-7.864-7.638q-2.913-4.836-2.912-11.042 0-6.197 2.912-11.042a21.26 21.26 0 0 1 7.829-7.638q4.914-2.799 11.042-2.797c4.033 0 7.69.936 10.966 2.797q4.916 2.798 7.83 7.598 2.912 4.8 2.912 11.082 0 6.206-2.947 11.042a21.53 21.53 0 0 1-7.864 7.638c-3.288 1.86-6.922 2.797-10.903 2.797m0-9.077q3.328-.001 5.859-1.59c1.687-1.057 3.027-2.53 4.01-4.425q1.473-2.837 1.473-6.39c0-2.422-.491-4.548-1.473-6.391-.983-1.838-2.317-3.3-4.01-4.386-1.687-1.086-3.646-1.623-5.859-1.623-2.271 0-4.258.543-5.975 1.623q-2.572 1.63-4.044 4.386c-.982 1.843-1.474 3.97-1.474 6.39q0 3.556 1.474 6.39c.982 1.89 2.334 3.363 4.044 4.427 1.717 1.057 3.704 1.589 5.975 1.589m46.762 9.077q-6.129-.002-11.001-2.837-4.88-2.834-7.679-7.714t-2.797-11.001q-.002-6.121 2.797-10.967 2.8-4.838 7.679-7.638 4.881-2.799 11.001-2.797c2.924 0 5.645.52 8.17 1.549 2.519 1.034 4.703 2.444 6.541 4.235a15.6 15.6 0 0 1 3.969 6.39l-8.696 3.78q-1.134-3.104-3.819-4.993-2.688-1.89-6.165-1.89-3.252.002-5.784 1.59c-1.687 1.057-3.016 2.519-3.969 4.385q-1.44 2.8-1.439 6.431t1.439 6.43 3.969 4.386q2.532 1.589 5.784 1.59 3.555 0 6.2-1.89c1.762-1.26 3.027-2.947 3.779-5.067l8.695 3.935q-1.213 3.474-3.934 6.24c-1.815 1.843-3.981 3.276-6.506 4.31-2.514 1.023-5.258 1.543-8.234 1.543M463 58.117V85.5h-9.909V60.463q0-2.723-1.057-4.691-1.058-1.97-2.912-3.063c-1.237-.728-2.687-1.098-4.351-1.098q-2.42-.002-4.311 1.098a7.67 7.67 0 0 0-2.946 3.063c-.705 1.311-1.058 2.871-1.058 4.691V85.5h-9.909V28.245h9.909v19.293a10.6 10.6 0 0 1 3.369-3.074c2.195-1.283 4.749-1.93 7.673-1.93 3.028 0 5.709.653 8.054 1.965a14 14 0 0 1 5.484 5.483q1.965 3.518 1.964 8.135"
          fill="#212130"
          data-sentry-element="path"
          data-sentry-source-file="logo.tsx"
        />
      </svg>
    </a>
    <nav
      aria-label="Main"
      data-orientation="horizontal"
      dir="ltr"
      data-slot="navigation-menu"
      data-viewport="false"
      className="group/navigation-menu relative max-w-max flex-1 items-center justify-center hidden xl:flex"
      data-sentry-element="unknown"
      data-sentry-component="NavigationMenu"
      data-sentry-source-file="navigation-menu.tsx"
    >
      <div style={{ position: "relative" }}>
        <ul
          data-orientation="horizontal"
          data-slot="navigation-menu-list"
          className="group flex flex-1 list-none items-center justify-center gap-1"
          data-sentry-element="unknown"
          data-sentry-source-file="navigation-menu.tsx"
          data-sentry-component="NavigationMenuList"
          dir="ltr"
        >
          <li
            data-slot="navigation-menu-item"
            className="relative"
            data-sentry-element="unknown"
            data-sentry-component="NavigationMenuItem"
            data-sentry-source-file="navigation-menu.tsx"
          >
            <button
              id="radix-«r0»-trigger-radix-«r1»"
              data-state="closed"
              aria-expanded="false"
              aria-controls="radix-«r0»-content-radix-«r1»"
              data-slot="navigation-menu-trigger"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium hover:bg-primarylight hover:text-accent-foreground focus:bg-primarylight focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-primarylight data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-primarylight data-[state=open]:bg-primarylight focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 group"
              data-sentry-element="unknown"
              data-sentry-component="NavigationMenuTrigger"
              data-sentry-source-file="navigation-menu.tsx"
              data-radix-collection-item=""
            >
              Properties{" "}
              <svg
                width={48}
                height={48}
                viewBox="0 0 49 48"
                fill="none"
                className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
                aria-hidden="true"
                data-sentry-element="svg"
                data-sentry-source-file="chevron-down-icon.tsx"
                data-sentry-component="ChevronDownIcon"
              >
                <path
                  d="M33.386 20c-4.387 4.133-6.918 6.917-6.918 6.917A3.47 3.47 0 0 1 24 27.946c-.46 0-.914-.091-1.337-.268-.424-.176-1.132-.76-1.132-.76L14.614 20"
                  stroke="#292D32"
                  strokeWidth={2}
                  data-sentry-element="path"
                  data-sentry-source-file="chevron-down-icon.tsx"
                />
              </svg>
            </button>
          </li>
          <li
            data-slot="navigation-menu-item"
            className="relative"
            data-sentry-element="unknown"
            data-sentry-component="NavigationMenuItem"
            data-sentry-source-file="navigation-menu.tsx"
          >
            <button
              id="radix-«r0»-trigger-radix-«r2»"
              data-state="closed"
              aria-expanded="false"
              aria-controls="radix-«r0»-content-radix-«r2»"
              data-slot="navigation-menu-trigger"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium hover:bg-primarylight hover:text-accent-foreground focus:bg-primarylight focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-primarylight data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-primarylight data-[state=open]:bg-primarylight focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 group"
              data-sentry-element="unknown"
              data-sentry-component="NavigationMenuTrigger"
              data-sentry-source-file="navigation-menu.tsx"
              data-radix-collection-item=""
            >
              Services{" "}
              <svg
                width={48}
                height={48}
                viewBox="0 0 49 48"
                fill="none"
                className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
                aria-hidden="true"
                data-sentry-element="svg"
                data-sentry-source-file="chevron-down-icon.tsx"
                data-sentry-component="ChevronDownIcon"
              >
                <path
                  d="M33.386 20c-4.387 4.133-6.918 6.917-6.918 6.917A3.47 3.47 0 0 1 24 27.946c-.46 0-.914-.091-1.337-.268-.424-.176-1.132-.76-1.132-.76L14.614 20"
                  stroke="#292D32"
                  strokeWidth={2}
                  data-sentry-element="path"
                  data-sentry-source-file="chevron-down-icon.tsx"
                />
              </svg>
            </button>
          </li>
          <li
            data-slot="navigation-menu-item"
            className="relative"
            data-sentry-element="unknown"
            data-sentry-component="NavigationMenuItem"
            data-sentry-source-file="navigation-menu.tsx"
          >
            <button
              id="radix-«r0»-trigger-radix-«r3»"
              data-state="closed"
              aria-expanded="false"
              aria-controls="radix-«r0»-content-radix-«r3»"
              data-slot="navigation-menu-trigger"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium hover:bg-primarylight hover:text-accent-foreground focus:bg-primarylight focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-primarylight data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-primarylight data-[state=open]:bg-primarylight focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 group"
              data-sentry-element="unknown"
              data-sentry-component="NavigationMenuTrigger"
              data-sentry-source-file="navigation-menu.tsx"
              data-radix-collection-item=""
            >
              Resources{" "}
              <svg
                width={48}
                height={48}
                viewBox="0 0 49 48"
                fill="none"
                className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
                aria-hidden="true"
                data-sentry-element="svg"
                data-sentry-source-file="chevron-down-icon.tsx"
                data-sentry-component="ChevronDownIcon"
              >
                <path
                  d="M33.386 20c-4.387 4.133-6.918 6.917-6.918 6.917A3.47 3.47 0 0 1 24 27.946c-.46 0-.914-.091-1.337-.268-.424-.176-1.132-.76-1.132-.76L14.614 20"
                  stroke="#292D32"
                  strokeWidth={2}
                  data-sentry-element="path"
                  data-sentry-source-file="chevron-down-icon.tsx"
                />
              </svg>
            </button>
          </li>
          <li
            data-slot="navigation-menu-item"
            className="relative"
            data-sentry-element="unknown"
            data-sentry-component="NavigationMenuItem"
            data-sentry-source-file="navigation-menu.tsx"
          >
            <button
              id="radix-«r0»-trigger-radix-«r4»"
              data-state="closed"
              aria-expanded="false"
              aria-controls="radix-«r0»-content-radix-«r4»"
              data-slot="navigation-menu-trigger"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium hover:bg-primarylight hover:text-accent-foreground focus:bg-primarylight focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-primarylight data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-primarylight data-[state=open]:bg-primarylight focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 group"
              data-sentry-element="unknown"
              data-sentry-component="NavigationMenuTrigger"
              data-sentry-source-file="navigation-menu.tsx"
              data-radix-collection-item=""
            >
              Company{" "}
              <svg
                width={48}
                height={48}
                viewBox="0 0 49 48"
                fill="none"
                className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
                aria-hidden="true"
                data-sentry-element="svg"
                data-sentry-source-file="chevron-down-icon.tsx"
                data-sentry-component="ChevronDownIcon"
              >
                <path
                  d="M33.386 20c-4.387 4.133-6.918 6.917-6.918 6.917A3.47 3.47 0 0 1 24 27.946c-.46 0-.914-.091-1.337-.268-.424-.176-1.132-.76-1.132-.76L14.614 20"
                  stroke="#292D32"
                  strokeWidth={2}
                  data-sentry-element="path"
                  data-sentry-source-file="chevron-down-icon.tsx"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </nav>
    <div className="flex items-center justify-end gap-4 xl:mx-0 xl:w-auto">
      <div
        className="ml-auto flex items-center"
        data-sentry-component="SearchButton"
        data-sentry-source-file="main-navbar-search-button.tsx"
      >
        <div
          className="w-full flex items-center"
          data-sentry-component="SearchBar"
          data-sentry-source-file="searchbar.tsx"
        >
          <button
            className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-accent text-foreground shadow-xs hover:bg-accent/80 h-9 py-2 text-sm border w-9 border-none px-1 [&_svg]:size-8"
            data-sentry-element="Button"
            data-sentry-source-file="searchbar.tsx"
          >
            <svg
              width={32}
              height={32}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-sentry-element="svg"
              data-sentry-source-file="search-icon.tsx"
              data-sentry-component="SearchIcon"
            >
              <path
                d="M14.9698 19.807C17.969 19.807 20.4005 17.3756 20.4005 14.3762C20.4005 11.377 17.969 8.94556 14.9698 8.94556C11.9705 8.94556 9.53906 11.377 9.53906 14.3762C9.53906 17.3756 11.9705 19.807 14.9698 19.807Z"
                stroke="#292D32"
                strokeWidth="1.5"
                data-sentry-element="path"
                data-sentry-source-file="search-icon.tsx"
              />
              <path
                d="M21.9508 22.9103C22.2538 23.2132 22.745 23.2132 23.048 22.9103C23.3509 22.6073 23.3509 22.1161 23.048 21.8131L21.9508 22.9103ZM18.3303 19.2898L21.9508 22.9103L23.048 21.8131L19.4275 18.1926L18.3303 19.2898Z"
                fill="#292D32"
                data-sentry-element="path"
                data-sentry-source-file="search-icon.tsx"
              />
            </svg>
          </button>
          <h2
            id="radix-«r6»"
            data-slot="dialog-title"
            className="text-lg leading-none font-semibold sr-only"
            data-sentry-element="unknown"
            data-sentry-source-file="dialog.tsx"
            data-sentry-component="DialogTitle"
          >
            Search Box
          </h2>
          <p
            id="radix-«r7»"
            data-slot="dialog-description"
            className="text-muted-foreground text-sm sr-only"
            data-sentry-element="unknown"
            data-sentry-source-file="dialog.tsx"
            data-sentry-component="DialogDescription"
          >
            Search by developers, locations and projects
          </p>
        </div>
      </div>
      <button
        className="cursor-pointer justify-center whitespace-nowrap rounded-lg text-xs font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-accent text-foreground shadow-xs hover:bg-accent/80 h-9 w-9 flex items-center gap-2"
        data-sentry-element="Button"
        data-sentry-source-file="share-button.tsx"
        type="button"
        id="radix-«r8»"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
      >
        <svg
          width={48}
          height={48}
          viewBox="0 0 49 48"
          fill="none"
          className="!size-5"
          data-sentry-element="svg"
          data-sentry-source-file="utility.tsx"
          data-sentry-component="ShareIcon"
        >
          <path
            d="M19.4436 26.265L29.6886 32.235M29.6736 15.765L19.4436 21.735M38.0586 13.5C38.0586 15.9853 36.0439 18 33.5586 18C31.0733 18 29.0586 15.9853 29.0586 13.5C29.0586 11.0147 31.0733 9 33.5586 9C36.0439 9 38.0586 11.0147 38.0586 13.5ZM20.0586 24C20.0586 26.4853 18.0439 28.5 15.5586 28.5C13.0733 28.5 11.0586 26.4853 11.0586 24C11.0586 21.5147 13.0733 19.5 15.5586 19.5C18.0439 19.5 20.0586 21.5147 20.0586 24ZM38.0586 34.5C38.0586 36.9853 36.0439 39 33.5586 39C31.0733 39 29.0586 36.9853 29.0586 34.5C29.0586 32.0147 31.0733 30 33.5586 30C36.0439 30 38.0586 32.0147 38.0586 34.5Z"
            stroke="#292D32"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            data-sentry-element="path"
            data-sentry-source-file="utility.tsx"
          />
        </svg>{" "}
      </button>

      <button className="cursor-pointer justify-center whitespace-nowrap rounded-lg text-xs font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none  [&_svg]:shrink-0 bg-accent text-foreground shadow-xs hover:bg-accent/80 h-9 w-9 flex items-center gap-2 lg:hidden"
        onClick={()=>setShowMobileFilters(prev=> !prev)}
      >
        <FilterIcon width={20} height={20} />
      </button>
      <button
        className="items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-lg text-xs font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-accent text-foreground shadow-xs hover:bg-accent/80 h-9 w-9 hidden xl:flex"
        data-sentry-element="Button"
        data-sentry-source-file="main-navbar.tsx"
      >
        <a
          className="flex flex-col items-center justify-start gap-1"
          data-sentry-element="Link"
          data-sentry-source-file="main-navbar.tsx"
          href="/shortlist?entry_point=navbar&cta=wishlist-icon"
        >
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="!size-5"
            data-sentry-element="svg"
            data-sentry-source-file="shortlist-icon.tsx"
            data-sentry-component="ShortlistIcon"
          >
            <path
              d="M9.465 15.6075C9.21 15.6975 8.79 15.6975 8.535 15.6075C6.36 14.865 1.5 11.7675 1.5 6.51745C1.5 4.19995 3.3675 2.32495 5.67 2.32495C7.035 2.32495 8.2425 2.98495 9 4.00495C9.7575 2.98495 10.9725 2.32495 12.33 2.32495C14.6325 2.32495 16.5 4.19995 16.5 6.51745C16.5 11.7675 11.64 14.865 9.465 15.6075Z"
              stroke="#292D32"
              strokeWidth={1}
              strokeLinecap="round"
              strokeLinejoin="round"
              data-sentry-element="path"
              data-sentry-source-file="shortlist-icon.tsx"
            />
          </svg>
        </a>
      </button>
      <div
        className="hidden items-center justify-end gap-4 xl:flex"
        data-sentry-component="UserAvatar"
        data-sentry-source-file="user-avatar.tsx"
      >
        <button
          className="items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-lg transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-9 px-4 py-2 inline font-semibold text-xs xl:text-sm leading-[1.35] w-full text-left xl:w-fit xl:text-center"
          data-sentry-element="Button"
          data-sentry-source-file="calendly-button.tsx"
        >
          Get Started
        </button>
        <button className="h-12 font-semibold text-background hidden">
          Get Started
        </button>
      </div>
    </div>
  </nav>
</div>

    );
}

export default Navbar;

