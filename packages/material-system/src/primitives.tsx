import type {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  HTMLAttributes,
  ReactNode,
} from "react";

export type Accent = "teal" | "sapphire" | "copper" | "violet" | "amber";

export function MachinedFrame({
  className = "",
  children,
  ...props
}: ComponentPropsWithoutRef<"section">) {
  return (
    <section className={`machined-frame ${className}`.trim()} {...props}>
      <span className="frame-groove" aria-hidden="true" />
      {children}
    </section>
  );
}

export function PanelWell({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`panel-well ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function RaisedCard({
  accent = "sapphire",
  active = false,
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement> & { accent?: Accent; active?: boolean }) {
  return (
    <div
      className={`raised-card${active ? " raised-card--active" : ""} ${className}`.trim()}
      data-accent={accent}
      {...props}
    >
      {children}
      <span className="active-aperture" aria-hidden="true" />
    </div>
  );
}

export function RecessedControl({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`input-shell ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function CrystalButton({
  className = "",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`crystal-button ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}

export function TechnicalLabel({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`technical-label ${className}`.trim()} {...props}>
      {children}
    </p>
  );
}

export function TechnicalOverlay({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`technical-overlay ${className}`.trim()}
      aria-hidden="true"
      {...props}
    >
      {children}
    </div>
  );
}

export type MaterialPrimitiveChildren = { children?: ReactNode };
