import { useEffect, useRef, useState } from 'react'
import { getGPOs, getPolicies, updatePolicyCheck } from '../../api/hardening.api';
import { CheckBox, Container, GPO, NavBar, Policies, PoliciesContainer, Policy, PolicyDescription, PolicyInputCheck } from './styled';
import { Check } from '@mui/icons-material';

export const Hardening = ({userData}) => {

  const { profile } = userData

  const policiesContainerRef = useRef(null);

  const [gposData, setGposData] = useState([]);
  const [gpoSelected, setGpoSelected] = useState("");
  const [policiesData, setPoliciesData] = useState([]);

  const getGposData = async() => {
    const { data } = await getGPOs()
    setGposData(data)
  }

  const getPoliciesData = async(gpo) => {
    const { data } = await getPolicies(gpo)
    setPoliciesData(data)
  }

  useEffect(() => {
    getGposData()
  }, [])

  useEffect(() => {
    if(gpoSelected === "" && gposData.length !== 0) {
      setGpoSelected(gposData[0].gpo)
    }
  }, [gposData])

  useEffect(() => {
    getPoliciesData(gpoSelected)
  }, [gpoSelected])

  useEffect(() => {
    if(policiesContainerRef.current) {
      policiesContainerRef.current.scrollTo(0, 0);
    }
  }, [policiesData])

  const checkedOnChange = async(id, checked) => {
    if(profile === 'si_viga') {
      try {
        await updatePolicyCheck({id, checked: checked === 1 ? 0 : 1})
        setPoliciesData(current => current.map(
          policy => policy.id === id
            ? ({...policy, checked: checked === 1 ? 0 : 1})
            : policy
        ))
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <Container>
      <PoliciesContainer ref={policiesContainerRef}>
        <Policies>
          {policiesData.map(({id, policy_description, checked}, i) => (
            <Policy key={i}>
              <PolicyDescription checked={checked}>{policy_description}</PolicyDescription>
              <PolicyInputCheck>
                <CheckBox onClick={() => checkedOnChange(id, checked)}>
                  {checked === 1 && (
                    <Check />
                  )}
                </CheckBox>
              </PolicyInputCheck>
            </Policy>
          ))}
        </Policies>
      </PoliciesContainer>
      <NavBar>
        {gposData.map(({gpo}, i) => (
          <GPO 
            key={i} 
            isSelected={gpo === gpoSelected}
            onClick={() => setGpoSelected(gpo)}
          >
            {gpo}
          </GPO>
        ))}
      </NavBar>
    </Container>
  )
}
