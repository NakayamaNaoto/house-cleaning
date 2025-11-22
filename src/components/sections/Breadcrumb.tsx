const crumbs = [
    { label: "名古屋のパーソナルなら駅近で通いやすいHUA OBST | 引き締め", href: "/" },
    { label: "原状回復工事は信頼の55リフォーム名古屋店", href: "/55reform/" },
    {
        label: "名古屋のお掃除代行なら家中まるごと【出張無料】のプロ集団55リフォームにおまかせ！｜キッチン・水回り・エアコン",
        href: "#",
    },
];

const Breadcrumb = () => {
    return (
        <div className="breadcrumb">
            <nav className="container" aria-label="Breadcrumb">
                <ol>
                    {crumbs.map((crumb, index) => (
                        <li key={crumb.label} aria-current={index === crumbs.length - 1 ? "page" : undefined}>
                            {index === crumbs.length - 1 ? <span>{crumb.label}</span> : <a href={crumb.href}>{crumb.label}</a>}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumb;
