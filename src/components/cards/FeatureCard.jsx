export const FeatureCard = ({
    title,
    description,
    svg
}) => {
    return (
        <article className="bg-surface-secondary dark:border-dark-border dark:bg-dark-surface-secondary flex w-[280px] shrink-0 flex-col gap-4 rounded-lg border border-border p-4 lg:w-full lg:flex-row lg:p-5">
            <figure className="bg-surface-tertiary dark:bg-dark-surface-tertiary flex size-12 shrink-0 items-center justify-center rounded-full p-3 text-white">
                {svg}
            </figure>
            <div className="flex flex-col items-start gap-1">
                <h5 className="text-lg font-medium">{title}</h5>
                <p className="text-text-tertiary dark:text-dark-text-tertiary text-pretty">
                    {description}
                </p>
            </div>
        </article>
    );
};
