import styles from './PrintButton.module.scss';

export default function PrintButton() {
  const print = () => {
    const content = document.getElementsByTagName('html')[0];
    if (!content) {
        console.warn(`Unable to find html element`);
        return;
    }

    const printWindow = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');

    if (!printWindow) {
        console.warn(`Unable to open print window`);
        return;
    }
    
    printWindow.document.write(content.innerHTML);
    printWindow.document.close();
    printWindow.focus();
    printWindow.addEventListener('load', () => {
        printWindow.print();
        printWindow.close();
    });
  }

  return (
    <button class={styles.PrintButton + ' no-print'} onClick={print}>
      <i className="fal fa-print"></i> Print
    </button>
  );
}
