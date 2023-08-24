import styles from "../Contact/Contact.module.scss"

export default function Map() {
    return (
        <>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48764.32551520578!2d44.4988465072998!3d40.1919240669079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shy!2s!4v1674223960996!5m2!1shy!2s"
                padding="40"
                className={styles["map"]}
                style={{border:"0",borderRadius:"10px"}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </>
    );
}
