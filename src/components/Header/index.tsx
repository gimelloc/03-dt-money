import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/logo-dt-money.svg';
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header(){
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} />

                <Dialog.Root>
                <Dialog.Trigger>
                <NewTransactionButton>Nova Transação</NewTransactionButton>
                </Dialog.Trigger>

                <NewTransactionModal/>

                </Dialog.Root>
                
            </HeaderContent>
        </HeaderContainer>
    )
}